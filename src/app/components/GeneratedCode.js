
import React from "react";
import AceEditor from "react-ace";

// Importing necessary Ace editor builds and tools
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

// Function component GeneratedCode which takes value as a prop
function GeneratedCode({value}) {
    // Rendering AceEditor with the given props
    return (
        <AceEditor
          mode="python" // Setting language mode as Python
          theme="monokai" // Setting theme as monokai
          value= {value} // Setting value passed as prop
          fontSize={18} // Setting font size
          name="UNIQUE_ID_OF_DIV" // Setting unique id
          editorProps={{ $blockScrolling: true }} // Blocking scrolling
          height="800px" // Setting editor height
          width="800px" // Setting editor width
        />
    );
}

// Exporting the GeneratedCode component as default
export default GeneratedCode;
