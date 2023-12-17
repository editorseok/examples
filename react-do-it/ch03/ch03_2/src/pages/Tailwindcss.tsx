import * as D from '../data';

const Tailwindcss = () => {
  return (
    <div className="bg-black/60">
      <p className="w-full p-4 text-3xl text-white">Tailwindcss</p>
      <p className="italic text-violet-200 line-clamp-3">
        {D.randomParagraphs(10)}
      </p>
      <button className="btn btn-primary" style={{ textTransform: 'none' }}>
        Button
      </button>
    </div>
  );
};

export default Tailwindcss;
