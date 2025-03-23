// filepath: /app/components/SkillCard.js
export default function SkillCard({ skill }) {
    const handleVote = async (voteType) => {
        try {
            const response = await fetch(`/api/skills/${skill.id}/vote`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ vote_type: voteType }),
            });
            if (response.ok) {
                alert('Vote submitted!');
            } else {
                const error = await response.json();
                alert(`Error: ${error.error}`);
            }
        } catch (err) {
            alert('Voting failed.');
        }
    };

    return (
        <div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <button onClick={() => handleVote('confirm_death')}>Confirm Its Death</button>
            <button onClick={() => handleVote('mark_for_doom')}>Mark for Doom</button>
            <button onClick={() => handleVote('bring_back')}>Bring It Back</button>
        </div>
    );
}