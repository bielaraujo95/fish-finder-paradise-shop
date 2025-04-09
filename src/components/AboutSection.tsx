
const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>
          <p className="text-gray-700 mb-6">
            Há mais de 15 anos no mercado, somos especialistas em equipamentos de pesca de alta qualidade. 
            Nossa missão é oferecer aos pescadores os melhores produtos, desde barcos e motores até equipamentos 
            e roupas especializadas para pesca.
          </p>
          <p className="text-gray-700">
            Contamos com uma equipe de profissionais apaixonados pela pesca, prontos para oferecer o melhor 
            atendimento e orientação na escolha dos produtos ideais para sua aventura.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-fishing-lightGray">
              <h3 className="font-bold text-xl mb-2">Qualidade</h3>
              <p className="text-gray-700">
                Trabalhamos apenas com as melhores marcas e produtos do mercado.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-fishing-lightGray">
              <h3 className="font-bold text-xl mb-2">Experiência</h3>
              <p className="text-gray-700">
                Nossa equipe é composta por pescadores experientes.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-fishing-lightGray">
              <h3 className="font-bold text-xl mb-2">Atendimento</h3>
              <p className="text-gray-700">
                Suporte personalizado para cada cliente e suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
