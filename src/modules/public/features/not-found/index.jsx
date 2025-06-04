import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import './styles.scss';

import { convertUtcDateTimeToLocalTz } from '~/utils/date-time';

const listTiktokUsernames = [
    'divistore.1',
    'meoo2hand.7',
    "meooday13"
]

const NotFound = () => {
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState(listTiktokUsernames[0]);

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io('http://localhost:3002/');

        socketRef.current.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socketRef.current.on('chat-message', (chatData) => {
            console.log('Received chat message:', chatData);
            const message = `${chatData.uniqueId} (userId:${chatData.userId}, userName: ${chatData.nickname}) writes: ${
                chatData.comment
            }. At: ${convertUtcDateTimeToLocalTz(chatData.createTime)}`;
            setMessages((prev) => [message, ...prev]);
        });

        socketRef.current.on("stream-end", (message) => {
            alert(`Stream ended: ${message}`);
        })

        socketRef.current.on("error", ({message}) => {
            alert(`Error: ${message}`);
        })

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const handleJoinLive = () => {
        setMessages([]); // Clear previous messages
        socketRef.current.emit('join-live', {
            tiktokUsername: username,
        });
    };

    const handleLeaveLive = () => {
        socketRef.current.emit("leave-live")
    }

    const handlePrintMessage = (message) => {
        console.log('Print message:', message);
        // Here you can implement the logic to print the message
        // For example, you could open a new window or use a print library
    }

    return (
        <>
            {/* <input
                className="input-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter TikTok username"
            /> */}
            <select className="input-username" defaultValue={username} onChange={(e) => setUsername(e.target.value)}>
                {listTiktokUsernames.map((user, index) => (
                    <option key={index} value={user}>
                        {user}
                    </option>
                ))}
            </select>
            <button className="join-button" onClick={handleJoinLive}>
                Join live
            </button>
            <button className="leave-button" onClick={handleLeaveLive}>
                Leave live
            </button>

            <ul className="message-list">
                {messages.map((message, index) => (
                    <li className="message-item" key={index}>
                        <span className="message-text">{message}</span>
                        <button className="message-action" onClick={() => handlePrintMessage(message)}>
                            In
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default NotFound;
