// filepath: /app/submit/page.js
import { useState } from 'react';

export default function SubmitSkillForm() {
    const [formData, setFormData] = useState({
        name: '',
        status: '',
        description: '',
        genai_impact: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/skills', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Skill submitted successfully!');
            } else {
                const error = await response.json();
                alert(`Error: ${error.error}`);
            }
        } catch (err) {
            alert('Submission failed.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Skill Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
            />
            <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
            />
            <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                required
            >
                <option value="">Select Category</option>
                <option value="dead">Dead</option>
                <option value="dying">Dying</option>
                <option value="resurrected">Resurrected</option>
            </select>
            <label>
                <input
                    type="checkbox"
                    checked={formData.genai_impact}
                    onChange={(e) => setFormData({ ...formData, genai_impact: e.target.checked })}
                />
                GenAI Impact
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}