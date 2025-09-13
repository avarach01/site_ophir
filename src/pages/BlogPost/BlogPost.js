import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaComments } from 'react-icons/fa';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import useLoading from '../../hooks/useLoading';

/**
 * BlogPost - Page d'article de blog individuel
 * 
 * Affiche le contenu complet d'un article de blog spécifique.
 * Récupère les données de l'article en fonction de l'ID dans l'URL.
 * 
 * Inclut :
 * - Titre de l'article
 * - Image principale
 * - Contenu détaillé
 * - Informations sur l'auteur et la date de publication
 */

const fetchPostById = (id) => {
  
  // Simulation d'une requête API
  return {
    title: `Article ${id}`,
    content: `Contenu de l'article ${id}...`,
    date: new Date().toLocaleDateString(),
    author: "Dr. Smith",
    comments: 5,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  };
};

const BlogPost = () => {
  const { id } = useParams();
  const post = useMemo(() => fetchPostById(id), [id]); // Utilisation de l'id

  return (
    <div className="blog-post-page">
      <motion.div 
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <FaCalendar className="mr-2" />
          <span className="mr-4">{post.date}</span>
          <FaUser className="mr-2" />
          <span className="mr-4">{post.author}</span>
          <FaComments className="mr-2" />
          <span>{post.comments} commentaires</span>
        </div>
        <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </motion.div>
    </div>
  );
};

export default BlogPost;
