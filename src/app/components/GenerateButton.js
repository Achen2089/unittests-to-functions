'use client'

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function GenerateButton({state, handleClick }) {
  return (
    <>
    <br />
    <button
        onClick = {handleClick}
        disabled={state}
        className={`btn btn-primary btn-lg ${state ? "spinner" : ""}`}
        style={{ padding: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
    >
        {state ? "Converting... 🧠" : "Turn Tests to Code"}
    </button>
    <br />
  </>
  );
}

export default GenerateButton;
