import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ImageGallery({ images, setImages }) {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedImages = Array.from(images);
    const [reorderedItem] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, reorderedItem);

    setImages(reorderedImages);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable-gallery">
        {(provided) => (
          <div
            className="image-gallery grid grid-cols-3 gap-4"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {images.map((image, index) => (
              <Draggable key={image.id} draggableId={image.id} index={index}>
                {(provided) => (
                  <div
                    className="image-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="image-preview"
                    />
                    <p>{image.title}</p>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ImageGallery;
