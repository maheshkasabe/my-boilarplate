"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function AgentVideoHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [showThumbnail, setShowThumbnail] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setShowThumbnail(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume || 1;
        setIsMuted(false);
      } else {
        videoRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(formatTime(videoRef.current.currentTime));
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Handle video load metadata to get duration
  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        setDuration(formatTime(videoRef.current.duration));
      }
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', () => setIsPlaying(false));
    }

    return () => {
      if (video) {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', () => setIsPlaying(false));
      }
    };
  }, []);

  return (
    <section className="pt-32 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent dark:from-transparent dark:via-purple-950/10 dark:to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 tracking-tight leading-tight text-foreground">
            AI-driven <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">Due Diligence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Save time, reduce costs, and gain deeper insights into businesses with Diligent Insight, the next-generation platform for automated due diligence.
          </p>
        </div>
        
        {/* Video Container with Glossy Effect */}
        <div className="max-w-4xl mx-auto relative">
          {/* Glossy Border Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-70"></div>
          
          {/* Video Player */}
          <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
            {/* Custom Thumbnail */}
            {showThumbnail && (
              <div className="absolute inset-0 z-10">
                <Image
                  src="/images/DI_Thumbnail.jpg"
                  alt="Diligent Insight Platform"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            )}
            
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover rounded-xl"
              preload="metadata"
              onPlay={() => setShowThumbnail(false)}
            >
              <source src="/videos/diligent-insight-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Custom Play Button (shows when video is paused) */}
            {!isPlaying && (
              <button 
                className="absolute inset-0 flex items-center justify-center w-full h-full group z-20"
                onClick={togglePlayPause}
                aria-label="Play video"
              >
                <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-all duration-300 shadow-xl">
                  <svg 
                    className="w-8 h-8 text-white translate-x-0.5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
            
            {/* Video Controls (show when hovering) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col space-y-2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
              {/* Progress Bar */}
              <div 
                className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer"
                onClick={handleProgressClick}
              >
                <div 
                  className="h-full bg-purple-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              {/* Controls Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {/* Play/Pause Button */}
                  <button 
                    onClick={togglePlayPause}
                    className="text-white hover:text-purple-300 transition-colors"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      {isPlaying ? (
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      ) : (
                        <path d="M8 5v14l11-7z" />
                      )}
                    </svg>
                  </button>
                  
                  {/* Volume Control */}
                  <div className="flex items-center space-x-1">
                    <button 
                      className="text-white hover:text-purple-300 transition-colors"
                      onClick={toggleMute}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        {isMuted ? (
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                        ) : volume > 0.5 ? (
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        ) : (
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                        )}
                      </svg>
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-16 h-1 bg-white/30 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                    />
                  </div>
                  
                  {/* Time Display */}
                  <span className="text-white text-xs">{currentTime} / {duration}</span>
                </div>
                
                {/* Fullscreen Button */}
                <button 
                  className="text-white hover:text-purple-300 transition-colors"
                  onClick={toggleFullscreen}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Video Caption */}
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Watch how Diligent Insight transforms your compliance and due diligence processes</p>
          </div>
        </div>
      </div>
    </section>
  );
} 