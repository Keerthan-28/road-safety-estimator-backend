import { useState, useEffect } from 'react';
import InterventionCard from '../components/InterventionCard';
import ClauseInfoModal from '../components/ClauseInfoModal';

function ResultsPage({ reportId }) {
  const [estimate, setEstimate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchEstimate = async () => {
      try {
        const res = await fetch(`/api/v1/estimate/${reportId}`);
        const data = await res.json();
        setEstimate(data);
      } catch (error) {
        console.error('Error fetching estimate:', error);
      } finally {
        setLoading(false);
      }
    };
    if (reportId) fetchEstimate();
  }, [reportId]);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  if (loading) return <div>Loading estimate...</div>;
  if (!estimate) return <div>No estimate available.</div>;

  return (
    <div>
      <h1>Estimate for Report ID: {estimate.report_id}</h1>
      <h2>Total Cost: {estimate.total_cost}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {estimate.items.map((item, index) => (
          <InterventionCard key={index} item={item} onClick={() => handleCardClick(item)} />
        ))}
      </div>
      <ClauseInfoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} item={selectedItem} />
    </div>
  );
}

export default ResultsPage;
