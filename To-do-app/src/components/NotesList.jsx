
import PropTypes from 'prop-types';
import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note
                    key={note.id} // Add a key prop
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

// Prop types validation
NotesList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleAddNote: PropTypes.func.isRequired,
    handleDeleteNote: PropTypes.func.isRequired,
};

export default NotesList;
