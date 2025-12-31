import styles from "./ChatHeader.module.css";

function ChatHeader({ isBotTyping }) {
  return (
    <div className={styles.header}>
      <div className={styles.indicatorWrapper}>
        <div
          className={`${styles.statusDot} ${
            isBotTyping ? styles.typing : styles.idle
          }`}
        ></div>

        {/* Ping effect only shows when bot is typing to be more subtle */}
        {isBotTyping && (
          <div className={`${styles.ping} ${styles.typing}`}></div>
        )}
      </div>

      <div className={styles.info}>
        <h2>Evangadi AI Assistant</h2>
        <p>{isBotTyping ? "Generating answer..." : "Online & Ready to help"}</p>
      </div>
    </div>
  );
}

export default ChatHeader;
