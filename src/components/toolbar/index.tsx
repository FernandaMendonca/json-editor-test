import React, { useRef } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import {
  UploadIcon,
  DownloadIcon,
  TrashIcon,
  MagicWandIcon,
  StretchHorizontallyIcon,
  PinRightIcon,
} from '@radix-ui/react-icons';

export interface ToolBarProps {
  onMinifyClick: () => void;
  onPrettifyClick: () => void;
  onClearClick: () => void;
  onDownloadClick: () => void;
  onUploadClick: (fileContent: File) => void;
  onFixClick: () => void;
  isValidJson: boolean;
}

interface FileUploaderProps {
  onFileHandle: (fileContent: File) => void;
}

// Need to fix: hover is not working
export const FileUploader: React.FC<FileUploaderProps> = ({ onFileHandle }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.value = "";
      inputFileRef.current.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const fileUploaded = e.target.files[0];
    onFileHandle(fileUploaded);
  };

  return (
    <>
      <Toolbar.Button className='toolbar-button' id="upload" onClick={handleUploadClick}>
        <UploadIcon/>
          Importar
      </Toolbar.Button>
      <input
        ref={inputFileRef}
        style={{ display: "none" }}
        onChange={handleChange}
        type="file"
        accept="application/json"
      />
    </>
  );
};

const ToolbarDemo:React.FC<ToolBarProps> = (props) => (
  <Toolbar.Root className="ToolbarRoot" aria-label="Formatting options">
      <FileUploader onFileHandle={props.onUploadClick} />

      <Toolbar.Button className='toolbar-button' id="download" onClick={props.onDownloadClick}>
        <DownloadIcon />
          Baixar
      </Toolbar.Button>

      <Toolbar.Button className='toolbar-button' id="clear" onClick={props.onClearClick}>
        <TrashIcon />
          Limpar
      </Toolbar.Button>

      <Toolbar.Button className='toolbar-button' id="fix" onClick={props.onFixClick}>
        <MagicWandIcon />
          Arrumar
      </Toolbar.Button>

      <Toolbar.Button className='toolbar-button' id="minify" onClick={props.onMinifyClick}>
        <StretchHorizontallyIcon />
          Minificar
      </Toolbar.Button>

      <Toolbar.Button className='toolbar-button' id="prettify" onClick={props.onPrettifyClick}>
        <PinRightIcon />
          Prettify
      </Toolbar.Button>
  </Toolbar.Root>
);

export default ToolbarDemo;