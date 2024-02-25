import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { Subtitle, Title } from '../components';
import * as D from '../data';

export default function HigherOrderRadioInputTest() {
  const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), []);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const onChange = useCallback(
    (index: number) => () => setSelectedIndex(_ => index),
    [],
  );

  const radioInputs = useMemo(
    () =>
      jobTitles.map((value, index) => (
        <label key={index} className="flex justify-start cursor-pointer label">
          <input
            className="mr-4 radio radio-primary"
            type="radio"
            name="higher jobs"
            onChange={onChange(index)}
            checked={index === selectedIndex}
          />
          <span className="label-text">{value}</span>
        </label>
      )),
    [jobTitles, selectedIndex, onChange],
  );

  console.log(selectedIndex);

  return (
    <section className="mt-4">
      <Title>HigherOrderRadioInputTest</Title>
      <div className="flex flex-col justify-center mt-4">
        <Subtitle>What is your job?</Subtitle>
        <Subtitle className="mt-4">
          Selected Job: {jobTitles[selectedIndex]}
        </Subtitle>
        <div className="flex justify-center p-4 mt-4">
          <div className="flex flex-col mt-4">{radioInputs}</div>
        </div>
      </div>
    </section>
  );
}
