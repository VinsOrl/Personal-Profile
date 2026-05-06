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

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isStarted || gameOver) return;
    
    // Prevent default scrolling for arrow keys
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

        // Check collision with walls
        if (
          newHead.x < 0 || newHead.x >= GRID_SIZE ||
          newHead.y < 0 || newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Check collision with self
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check if food eaten
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
      <div className="game-container glass-panel">
        <div className="game-header">
          <h2>Retro <span className="highlight">Snake</span></h2>
          <p className="score">Score: <span>{score}</span></p>
        </div>
        
        <div className="board-wrapper">
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
                {gameOver && <h3>Game Over!</h3>}
                <button className="btn primary-btn" onClick={startGame}>
                  {gameOver ? 'Play Again' : 'Start Game'}
                </button>
              </div>
            </div>
          )}
        </div>
        <p className="game-instructions">Use W,A,S,D or Arrow keys to move.</p>
      </div>
    </section>
  );
};

export default MiniGame;
