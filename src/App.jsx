import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleFileChange = (e) => setFile(e.target.files[0])

  const handleSubmit = async () => {
    if (!file) return
    setLoading(true)
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await fetch('/api/v1/upload', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.report_id) {
        navigate(`/results/${data.report_id}`)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Road Safety Estimator</h1>
      <input type='file' onChange={handleFileChange} accept='.txt,.pdf,.docx' />
      <button onClick={handleSubmit} disabled={loading || !file}>
        {loading ? 'Uploading...' : 'Upload and Estimate'}
      </button>
    </div>
  )
}

export default App
