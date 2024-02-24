import type { ChangeEvent } from 'react';
import React, { useState, useCallback } from 'react';
import { Title } from '../components';
import { Input } from '../theme/daisyui';

const InputTest = () => {
  const [value, setValue] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(_ => e.target.value);
  }, []);
  const onChangeChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChecked(_ => e.target.checked);
  }, []);

  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div className="flex items-center justify-center p-4 mt-4">
        <Input
          className="input-primary input-sm"
          type="text"
          value={value}
          onChange={onChangeValue}
        />
        <Input
          className="ml-4 checkbox checkbox-primary input-sm"
          type="checkbox"
          checked={checked}
          onChange={onChangeChecked}
        />
      </div>
    </section>
  );
};

export default InputTest;
