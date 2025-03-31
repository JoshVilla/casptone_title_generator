"use client";
import { Badge } from "@/components/ui/badge";
import { Link as LinkIcon } from "lucide-react";
import { capstoneProjects } from "@/utils/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type SimilarProjects = {
  name: string;
  link: string;
};

export type CapstoneData = {
  thesisTitle: string;
  shortDescription: string;
  category: string;
  technologyUsed: string[];
  roles: string[];
  similarProjects: SimilarProjects[];
};

export default function Home() {
  const [capstoneData, setCapstoneData] = useState<CapstoneData | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const generateTitle = () => {
    if (capstoneProjects.length === 0) return;
    const randomNumber = Math.floor(Math.random() * capstoneProjects.length);
    setCapstoneData(capstoneProjects[randomNumber]);
    setAnimationKey((prev) => prev + 1);
  };

  useEffect(() => {
    generateTitle();
  }, []);

  return (
    <div className="w-full h-screen border flex flex-row items-center justify-center">
      <div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold">
            Capstone Project Idea{" "}
            <span className="text-[#0466c8]">Generator</span>
          </div>
          <div className="mt-6 text-gray-500 font-bold text-md md:text-lg">
            Struggling for Ideas? Let’s Find Your Perfect Capstone!
          </div>
        </div>
        <motion.div
          key={animationKey}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="shadow-[2px_1px_6px_4px_rgba(0,_0,_0,_0.1)] w-[90%] md:w-[600px] h-[500px] m md:h-[450px] mx-auto p-6 rounded-md mt-10"
        >
          <Badge style={{ backgroundColor: "#0466c8", color: "#fff" }}>
            {capstoneData?.category}
          </Badge>
          <div className="font-bold text-xl my-2">
            {capstoneData?.thesisTitle}
          </div>
          <div className="text-sm text-gray-500 whitespace-normal">
            {capstoneData?.shortDescription}
          </div>
          <div className="mt-6 flex">
            <div className="flex-1">
              <div className="text-xs text-gray-800 mb-2 font-bold">
                Tech Stacks
              </div>
              <div className="space-y-1">
                {capstoneData?.technologyUsed.map((tech, index) => (
                  <div key={index} className="text-xs text-gray-800">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-800 mb-2 font-bold">
                Suggested Roles
              </div>
              <div className="space-y-1">
                {capstoneData?.roles.map((roles, index) => (
                  <div key={index} className="text-xs text-gray-800">
                    {roles}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="text-sm text-gray-700 mb-2">Similar Projects</div>
            <div className="flex items-center gap-4 flex-wrap">
              {capstoneData?.similarProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 p-2 rounded-md"
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-xs text-gray-800 flex items-center gap-1"
                  >
                    <LinkIcon size={14} />
                    {project.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-4 w-full text-center">
          <button
            onClick={generateTitle}
            className="bg-[#0466c8] p-2 px-4 text-white rounded-lg w-60 cursor-pointer hover:bg-[#023e7d] transition-all"
          >
            Generate Title
          </button>
        </div>
      </div>
    </div>
  );
}
