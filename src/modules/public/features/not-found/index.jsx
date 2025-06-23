import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import './styles.scss';

import { convertUtcDateTimeToLocalTz } from '~/utils/date-time';

const listTiktokUsernames = ['divistore.1', 'meoo2hand.7', 'meooday13', 'huyen0897', 'tutustoredayy'];

const NotFound = () => {
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState(listTiktokUsernames[0]);

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io('http://103.155.161.56:3002/');

        socketRef.current.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socketRef.current.on('chat-message', (chatData) => {
            console.log('Received chat message:', chatData);
            setMessages((prev) => [chatData, ...prev]);
        });

        socketRef.current.on('stream-end', (message) => {
            alert(`Stream ended: ${message}`);
        });

        socketRef.current.on('error', ({ message }) => {
            alert(`Error: ${message}`);
        });

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
        socketRef.current.emit('leave-live');
    };

    const handlePrintMessage = (messageObj) => {
        const nickname = messageObj.nickname || '';
        const comment = messageObj.comment || '';
        const time = convertUtcDateTimeToLocalTz(messageObj.createTime) || '';

        const printWindow = window.open('', 'PRINT', 'height=400,width=300');

        if (printWindow) {
            printWindow.document.write(`
            <html>
              <head>
                <style>
                  body {
                    font-family: monospace;
                    font-size: 14px;
                    margin-bottom: 0;
                    padding: 12px;
                    line-height: 1.4;
                  }
                  .line {
                    margin-bottom: 4px;
                  }
                    .line-break {
                    margin-top: 100px;}
                </style>
              </head>
              <body>
                <div class="line"><strong>${nickname}</strong></div>
                <div class="line">${comment}</div>
                <div class="line">${time}</div>
                <div class="line-break">-----------------</div>
      
                <script>
                  window.onload = function () {
                    window.focus();
                    window.print();
                    window.onafterprint = function () {
                      window.close();
                    };
                  };
                </script>
              </body>
            </html>
          `);

            printWindow.document.close();
        } else {
            alert('Trình duyệt đã chặn popup in.');
        }
    };

    // const handlePrintMessage = (messageObj) => {
    //     fetch('http://localhost:3002/print-message', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         nickname: messageObj.nickname,
    //         comment: messageObj.comment,
    //         createTime: convertUtcDateTimeToLocalTz(messageObj.createTime),
    //       }),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data.success) {
    //           console.log('🖨️ In thành công');
    //         } else {
    //           console.error('❌ In thất bại:', data.message);
    //         }
    //       })
    //       .catch((err) => {
    //         console.error('Lỗi khi gửi yêu cầu in:', err);
    //       });
    //   };

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
                        <span className="message-text">{`${message.uniqueId} (userId:${message.userId}, userName: ${
                            message.nickname
                        }) writes: ${message.comment}. At: ${convertUtcDateTimeToLocalTz(message.createTime)}`}</span>
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
