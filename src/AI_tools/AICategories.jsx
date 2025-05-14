import React from "react";
import CategoryCard from "./CategoryCard";

const AICategories = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-3">All AI Tool Categories</h1>
      <p className="text-center mb-5">
        Find Most Popular and Featured Tools by Category
      </p>
      <div className="row">
        <CategoryCard
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbkCJSVQXXEuyQjCOnCo-Wm-AYwTY2liTmQ&s"
          title="Content Generation"
          subtitleLinks={[
            { label: "AI Writer",  },
            { label: "Paraphrasing Tool", },
            { label: "Email Generator", route: "/emailgenerator" },
            { label: "Article Summarizer", },
            { label: "Blog Post Ideas",},
            { label: "Grammar Checker", },
          ]}
        />
        <CategoryCard
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpmdN_Rc31KZz7isXAJ0LkskrOs49nopAZkA&s"
          title="Design Tools"
          subtitle="Logo Generator, Image Enhancer, Background Remover, Color Palette Generator, Mockup Creator, Typography Generator"
          link="#"
        />
      </div>
      <div className="row">
        <CategoryCard
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK08J8BT284sU8CO8WWK1rVOzJtREmYL1QRw&s"
          title="SEO Tools"
          subtitle="Keyword Research Tool, Meta Tag Generator, Backlink Analyzer, Content Optimizer, SERP Rank Tracker, Competitor Analysis"
          link="#"
        />
        <CategoryCard
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUxU2pH_yOOuhcbyAxgaCIx7PwGQhmV4HOw&s"
          title="Productivity"
          subtitle="Meeting Summarizer, Task Manager, Code Generator, Time Tracker, Note-Taking App, Automation Bot"
          link="#"
        />
      </div>
    </div>
  );
};

export default AICategories;





