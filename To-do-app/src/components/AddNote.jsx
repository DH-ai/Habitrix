import { useState } from 'react';
import PropTypes from 'prop-types';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote((prevNotes) => [...prevNotes, noteText]);
			setNoteText('');
		}
	};

	return (
		<div className='note note--new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
				aria-label='Type to add a note'
			></textarea>
			<div className='note__footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button
					className='note__save'
					onClick={handleSaveClick}
					disabled={noteText.trim().length === 0}
				>
					Save
				</button>
			</div>
		</div>
	);
};

AddNote.propTypes = {
	handleAddNote: PropTypes.func.isRequired,
};

export default AddNote;
