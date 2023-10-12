
import React from "react";
import AceEditor from "react-ace";

// Importing the required modules for Ace Editor
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

// CodeArea component definition
function CodeArea({ value, onChange }) {
    // Rendering AceEditor with the required props
    return (
        <AceEditor
          mode="python" // Set language mode to Python
          theme="monokai" // Set editor theme
          onChange={onChange} // Set onChange function to update the state value
          value={value} // Pass the current code value
          fontSize={18} // Set font size
          name="UNIQUE_ID_OF_DIV" // Set a unique ID for the editor div
          editorProps={{ $blockScrolling: true }} // Block scrolling to improve performance
          height="800px" // Set editor height
          width="800px" // Set editor width
        />
    );
}

export default CodeArea; // Export the CodeArea component
