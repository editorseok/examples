import * as D from '../data';
import { useCallback, useMemo } from 'react';
import { Button } from '../theme/daisyui';
import { Title } from '../components';

export default function Callback() {
  const onClick = useCallback(() => alert('button clicked'), []);
  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick}
            className="normal-case btn btn-primary btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onClick],
  );

  return (
    <section className="mt-4">
      <Title>Callback</Title>
      <div className="flex mt-4 justify-evenly">{buttons}</div>
    </section>
  );
}
