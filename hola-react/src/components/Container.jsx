import Card from './Card'

export default function Container({ title, content }) {
  return (
    <div>
      <Card 
        title={title}
        content={content}
      />
    </div>
  );
}