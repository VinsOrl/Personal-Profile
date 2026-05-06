import React, { useState, useEffect, useCallback } from 'react';
import './MiniGame.css';

type Point = { x: number; y: number };

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const INITIAL_SPEED = 150;

const MiniGame: React.FC = () => {
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Point>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Point>({ x: 15, y: 5 });
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  
  // Touch state for swipe gestures
  const [touchStart, setTouchStart] = useState<Point | null>(null);

  const generateFood = useCallback((): Point => {
    let newFood: Point;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      if (!snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
        break;
      }
    }
    return newFood;
  }, [snake]);

  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setScore(0);
    setGameOver(false);
    setIsStarted(true);
    setFood(generateFood());
  };

  // Keyboard Controls
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isStarted || gameOver) return;
    
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
    }
    
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        setDirection(prev => prev.y === 1 ? prev : { x: 0, y: -1 });
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        setDirection(prev => prev.y === -1 ? prev : { x: 0, y: 1 });
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        setDirection(prev => prev.x === 1 ? prev : { x: -1, y: 0 });
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        setDirection(prev => prev.x === -1 ? prev : { x: 1, y: 0 });
        break;
    }
  }, [isStarted, gameOver]);

  // Touch Controls (Swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart || !isStarted || gameOver) return;
    
    const touchEnd = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    const deltaX = touchEnd.x - touchStart.x;
    const deltaY = touchEnd.y - touchStart.y;
    
    // Minimum swipe distance
    if (Math.abs(deltaX) < 30 && Math.abs(deltaY) < 30) return;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (deltaX > 0) setDirection(prev => prev.x === -1 ? prev : { x: 1, y: 0 });
      else setDirection(prev => prev.x === 1 ? prev : { x: -1, y: 0 });
    } else {
      // Vertical swipe
      if (deltaY > 0) setDirection(prev => prev.y === -1 ? prev : { x: 0, y: 1 });
      else setDirection(prev => prev.y === 1 ? prev : { x: 0, y: -1 });
    }
    
    setTouchStart(null);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!isStarted || gameOver) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const head = prevSnake[0];
        const newHead = { x: head.x + direction.x, y: head.y + direction.y };

        if (
          newHead.x < 0 || newHead.x >= GRID_SIZE ||
          newHead.y < 0 || newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 10);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, INITIAL_SPEED);
    return () => clearInterval(gameInterval);
  }, [direction, isStarted, gameOver, food, generateFood]);

  return (
    <section className="minigame-section" id="minigame">
      <div className="minigame-layout fade-in">
        
        <div className="game-text-column">
          <h2 className="section-title">The <br/><span className="highlight">Intermission.</span></h2>
          <p className="game-description">
            A minimalist interpretation of the classic Snake. Navigate the grid with precision.
          </p>
          <div className="game-stats">
            <div className="stat">
              <span className="stat-label">Score</span>
              <span className="stat-value">{String(score).padStart(3, '0')}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Status</span>
              <span className="stat-value">{gameOver ? 'Ended' : isStarted ? 'Active' : 'Idle'}</span>
            </div>
          </div>
          
          <div className="game-controls-info">
            <p>Controls: W A S D / Arrows / Swipe</p>
          </div>
        </div>

        <div className="game-board-column">
          <div 
            className="board-wrapper"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="game-board"
              style={{
                gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`
              }}
            >
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                const x = i % GRID_SIZE;
                const y = Math.floor(i / GRID_SIZE);
                
                const isSnake = snake.some(s => s.x === x && s.y === y);
                const isHead = snake[0].x === x && snake[0].y === y;
                const isFood = food.x === x && food.y === y;
                
                return (
                  <div 
                    key={i} 
                    className={`cell ${isSnake ? 'snake' : ''} ${isHead ? 'snake-head' : ''} ${isFood ? 'food' : ''}`}
                  />
                );
              })}
            </div>
            
            {(!isStarted || gameOver) && (
              <div className="game-overlay">
                <div className="overlay-content">
                  {gameOver && <h3 className="game-over-text">Fin.</h3>}
                  <button className="btn primary-btn" onClick={startGame}>
                    {gameOver ? 'Restart' : 'Begin'}
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile on-screen D-PAD */}
          <div className="mobile-dpad">
            <button className="dpad-btn" onClick={() => setDirection(prev => prev.y === 1 ? prev : { x: 0, y: -1 })}>↑</button>
            <div className="dpad-middle">
              <button className="dpad-btn" onClick={() => setDirection(prev => prev.x === 1 ? prev : { x: -1, y: 0 })}>←</button>
              <button className="dpad-btn" onClick={() => setDirection(prev => prev.x === -1 ? prev : { x: 1, y: 0 })}>→</button>
            </div>
            <button className="dpad-btn" onClick={() => setDirection(prev => prev.y === -1 ? prev : { x: 0, y: 1 })}>↓</button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default MiniGame;
