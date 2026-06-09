function NotificationCard({ message }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <p>{message}</p>
    </div>
  );
}

export default NotificationCard;