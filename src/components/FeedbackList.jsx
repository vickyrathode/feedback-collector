import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const snapshot = await getDocs(collection(db, "feedbacks"));
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) return <p className="text-center">Loading feedback...</p>;

  if (feedbacks.length === 0) return <p className="text-center">No feedback submitted yet.</p>;

  return (
    <div className="feedback-container">
  {feedbacks.map(({ id, name, email, message, timestamp }) => (
    <div key={id} className="feedback-card">
      <h3 className="feedback-name">{name}</h3>
      <p className="feedback-email">{email}</p>
      <p className="feedback-message">{message}</p>
      {timestamp?.seconds && (
        <p className="feedback-time">
          {new Date(timestamp.seconds * 1000).toLocaleString()}
        </p>
      )}
    </div>
  ))}
</div>

  );
};

export default FeedbackList;
