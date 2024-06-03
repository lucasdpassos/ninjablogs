import React from 'react';
import PostCard from './components/PostCard';

const posts = [
  { id: '1', title: 'O Futuro da Inteligência Artificial no Atendimento ao Cliente', subtitle: 'O Papel Crescente da IA na Transformação Digital do Atendimento ao Cliente', date: '2024-06-01', thumbnail: '../src/assets/thumbs/post1.png' },
  { id: '2', title: 'Os Benefícios dos Chatbots para Empresas', subtitle: 'Automatizando o Sucesso: Os Chatbots e Seus Impactos Positivos na Operação Empresarial', date: '2024-06-02', thumbnail: '../src/assets/thumbs/post2.jpeg' },
  { id: '3', title: 'A Revolução da Inteligência Artificial', subtitle: 'Inovação Disruptiva: Como a IA Está Redefinindo Normas e Expectativas', date: '2024-06-03', thumbnail: '../src/assets/thumbs/post3.jpg' },
  { id: '4', title: 'A Evolução dos Chatbots: Do Texto à Inteligência Artificial', subtitle: 'A Origem Simples: Chatbots na Era Inicial da Comunicação Digital', date: '2024-06-04', thumbnail: '../src/assets/thumbs/post4.jpg' },
];

const Home = () => {
  const [latestPost, ...olderPosts] = posts;

  return (
    <div className="container mx-auto py-8">     
      <div className="mb-8">
        <div className="relative">
          <img className="w-full h-72 object-cover" src={latestPost.thumbnail} alt={latestPost.title} />
          <div className="absolute inset-0 bg-primary bg-opacity-25 hover:bg-opacity-50 transition duration-300 ease-in-out"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-3xl font-bold">{latestPost.title}</h2>
            <p className="text-lg">{latestPost.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {olderPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
