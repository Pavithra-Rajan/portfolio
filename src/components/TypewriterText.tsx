import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCaret?: boolean;
}

export function TypewriterText({ 
  text, 
  speed = 50, 
  delay = 0,
  className = "",
  onComplete,
  showCaret = true
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Initial delay before starting
    timeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
        
        // Play subtle key sound
        playKeySound();
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [displayedText, isTyping, text, speed, onComplete]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      {showCaret && (
        <span 
          className={`inline-block w-[2px] h-[1em] bg-ink ml-0.5 align-middle transition-opacity duration-100 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </span>
  );
}

// Subtle mechanical key sound using Web Audio API
function playKeySound() {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a subtle click sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Very short, subtle click
    oscillator.frequency.setValueAtTime(800 + Math.random() * 200, audioContext.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
  } catch (e) {
    // Audio not supported, fail silently
  }
}

export function playNavigationKeySound() {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Deeper mechanical keyboard thock
    const oscillator = audioContext.createOscillator();
    const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.1, audioContext.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    
    for (let i = 0; i < noiseBuffer.length; i++) {
      noiseData[i] = (Math.random() * 2 - 1) * 0.5;
    }
    
    const noiseSource = audioContext.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, audioContext.currentTime);
    
    noiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08);
    
    noiseSource.start(audioContext.currentTime);
    noiseSource.stop(audioContext.currentTime + 0.08);
  } catch (e) {
    // Audio not supported, fail silently
  }
}
