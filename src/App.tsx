import React, { useRef, useState } from "react";

import { SampleData } from "./mock/index"
import { JsonEditor } from "./components/json-editor";


enum Editor {
  Schema = "Schema",
  InputJson = "Input JSON",
}

function App() {
  const isSchemaSampleDataOn = true;
  const [schemaValue, setSchemaValue] = useState<string | undefined>(undefined);
  const BarRef = useRef<HTMLDivElement | null>(null);

  const handleSchemaValueChange = (value: string) => setSchemaValue(value);

  const getSchemaValue = () => isSchemaSampleDataOn && !schemaValue ? SampleData.schema : schemaValue;

  return (
    <div className="json-editor" ref={BarRef}>
        <JsonEditor
          title={Editor.Schema}
          path="schema.json"
          schemaValue={getSchemaValue()}
          defaultValue={SampleData.schema}
          isSchemaSampleDataOn={true}
          onChange={handleSchemaValueChange}
          />
    </div>
  );
}

export default App;
