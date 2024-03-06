import React from 'react'

function Modal() {
  return (
    <div>
        <MuiModal 
           open={showModal}
            onClose={handleClose}
            className={classes.modal}
            >
                <video src="/Videos/video.mp4" controls></video>
            </MuiModal>
    </div>
  )
}

export default Modal