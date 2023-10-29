import { Card } from '../components';


export const ProductList = () => { 
  return (
    <main>
      <section className="max-w-7xl mx-auto py-8">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};
