import { React, useState } from 'react';
import { TextField, InputLabel } from '@mui/material';
import { FiCopy } from "react-icons/fi";
import {} from '../css/features.css';

function Features() {
  const [value, setValue] = useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const handleChange = (e) => setValue(formatHTMLAnchor(e.target.value));
  const copyToClipboard = (value) => {
    if (value !== "") {
      navigator.clipboard.writeText(value);
      setCopySuccess('copied');
    }
  };

  return (
    <>
    <div>
      <h2>Convert HTML Anchor</h2>
      <TextField fullWidth id="html-anchor-input" label="Input" variant="outlined" onChange={handleChange} />
      <InputLabel error={true} htmlFor="html-anchor-input">Input: convert html anchor</InputLabel>
      <div id="html-anchor-output-box">
        <TextField fullWidth id="html-anchor-output" label="Output" variant="outlined" value={value} sx={{ mt: 2 }} />
        <FiCopy id="html-anchor-copy-clipboard" onClick={() => copyToClipboard(value)} className={copySuccess} />
      </div>
      <InputLabel error={true} htmlFor="html-anchor-output">Output: convert-html-anchor</InputLabel>
    </div>
    </>
  );
}

function formatHTMLAnchor(value) {
  return (
    value.toLowerCase().replace(/\s|_/g, '-')
  );
}

export default Features;
