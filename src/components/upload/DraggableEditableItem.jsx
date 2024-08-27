import React from 'react';
import { motion } from 'framer-motion';

const DraggableEditableItem = ({ image, onEdit, onDragEnd, index }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [title, setTitle] = React.useState(image.title);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onEdit(image.id, title);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 500, top: 0, bottom: 500 }}
      onDragEnd={(event, info) => onDragEnd(index, event, info)}
      style={{
        backgroundImage: `url(${image.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '200px',
        height: '200px',
        margin: '10px',
        position: 'relative',
      }}
    >
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleBlur}
          autoFocus
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            background: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            padding: '5px',
            fontSize: '14px',
            borderRadius: '4px',
          }}
        />
      ) : (
        <p
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            color: 'white',
            fontWeight: 'bold',
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '5px',
            borderRadius: '4px',
          }}
          onDoubleClick={handleDoubleClick}
        >
          {title}
        </p>
      )}
    </motion.div>
  );
};

export default DraggableEditableItem;
