import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaComments, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Blog.css'; // N'oubliez pas de créer ce fichier CSS

/**
 * Blog - Page principale du blog
 * 
 * Affiche une liste paginée des articles de blog avec :
 * - Un article en vedette
 * - Une grille d'articles récents
 * - Une pagination pour naviguer entre les pages d'articles
 * 
 * Utilise des composants réutilisables pour l'affichage des articles
 * et la pagination.
 */

const BlogHero = () => {
  const flowElements = [
    { className: "flow-element blue", delay: 0 },
    { className: "flow-element yellow", delay: 0.5 },
    { className: "flow-element green", delay: 1 },
    { className: "flow-element purple", delay: 1.5 },
    { className: "flow-element orange", delay: 2 },
  ];

  return (
    <div className="bg-white text-[#1c3c98] py-20 relative overflow-hidden mt-16">
      {/* Animations de fond - éléments flottants */}
      {flowElements.map((element, index) => (
        <motion.div
          key={index}
          className={element.className}
          initial={{ x: "-100%", y: "100%" }}
          animate={{
            x: ["-100%", "100%"],
            y: ["100%", "-100%"],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      ))}
      
      {/* Animations de fond - blobs colorés */}
      <motion.div 
        className="color-blob blue"
        animate={{
          scale: [1, 1.2, 1.1, 1.3, 1],
          x: [0, 50, -30, 20, 0],
          y: [0, 30, -50, 40, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div 
        className="color-blob yellow"
        animate={{
          scale: [1, 1.1, 1.2, 1.3, 1],
          x: [0, -30, 50, -20, 0],
          y: [0, -50, 30, -40, 0],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div 
        className="color-blob green"
        animate={{
          scale: [1, 1.3, 1.1, 1.2, 1],
          x: [0, 20, -40, 30, 0],
          y: [0, -20, 60, -30, 0],
          rotate: [0, 180, 360, 180, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      {/* Contenu principal - statique */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-8 md:mx-16 lg:mx-24">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Notre Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Découvrez nos dernières actualités et articles sur la télémédecine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogPost = ({ id, title, excerpt, date, author, comments, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <FaCalendar className="mr-2" />
        <span className="mr-4">{date}</span>
        <FaUser className="mr-2" />
        <span className="mr-4">{author}</span>
        <FaComments className="mr-2" />
        <span>{comments} commentaires</span>
      </div>
      <Link to={`/blog/${id}`} className="inline-flex items-center text-blue-600 hover:text-blue-800">
        Lire plus <FaArrowRight className="ml-2" />
      </Link>
    </div>
  </div>
);

const FeaturedPost = ({ id, title, excerpt, date, author, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src={image} alt={title} />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{date}</div>
        <Link to={`/blog/${id}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</Link>
        <p className="mt-2 text-gray-500">{excerpt}</p>
        <div className="mt-4">
          <Link to={`/blog/${id}`} className="text-blue-600 hover:text-blue-800 inline-flex items-center">
            Lire l'article complet <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center space-x-4 mt-8">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
    >
      <FaChevronLeft />
    </button>
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-4 py-2 rounded-md ${
          currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        {page}
      </button>
    ))}
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
    >
      <FaChevronRight />
    </button>
  </div>
);

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: "L'avenir de la télémédecine",
      excerpt: "Découvrez comment la télémédecine transforme les soins de santé...",
      date: "15 mai 2023",
      author: "Dr. Smith",
      comments: 5,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Innovations en imagerie médicale",
      excerpt: "Les dernières avancées en matière d'imagerie pour un diagnostic plus précis...",
      date: "2 juin 2023",
      author: "Dr. Johnson",
      comments: 3,
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "La santé connectée au quotidien",
      excerpt: "Comment les objets connectés révolutionnent notre approche de la santé...",
      date: "20 juin 2023",
      author: "Emma Brown",
      comments: 7,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="blog-page">
      <Helmet>
        <title>Blog - Ophir Technologies</title>
        <meta name="description" content="Découvrez les dernières actualités et articles sur la télémédecine et les innovations en santé par Ophir Technologies." />
        <meta name="keywords" content="télémédecine, santé connectée, innovation médicale, Ophir Technologies" />
        <meta property="og:title" content="Blog - Ophir Technologies" />
        <meta property="og:description" content="Actualités et articles sur la télémédecine et les innovations en santé" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ophirtechnologies.com/blog" />
        <meta property="og:image" content="https://www.ophirtechnologies.com/og-image.jpg" />
      </Helmet>
      <BlogHero />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Article à la une</h2>
        <FeaturedPost {...blogPosts[0]} />
        
        <h2 className="text-3xl font-bold mb-8">Derniers articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Blog;
