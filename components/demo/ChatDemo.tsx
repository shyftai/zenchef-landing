'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DEMO_CONVERSATIONS } from '@/lib/constants';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const prompts = [
    { key: 'weekly', label: 'What signals came in this week?' },
    { key: 'capacity', label: 'I need 25 demos for next month' },
    { key: 'filtered', label: 'Show me TheFork restaurants in Amsterdam rating > 4.3' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const typewriterEffect = async (text: string, callback: (chunk: string) => void) => {
    const words = text.split(' ');
    let currentText = '';

    for (let i = 0; i < words.length; i++) {
      currentText += (i > 0 ? ' ' : '') + words[i];
      callback(currentText);
      await new Promise(resolve => setTimeout(resolve, 30));
    }
  };

  const handlePromptClick = async (promptKey: string) => {
    const conversation = DEMO_CONVERSATIONS[promptKey as keyof typeof DEMO_CONVERSATIONS];
    if (!conversation) return;

    setSelectedPrompt(promptKey);

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: conversation.prompt
    };
    setMessages(prev => [...prev, userMessage]);

    // Show typing indicator
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Add assistant message with typewriter effect
    const assistantMessage: Message = {
      id: Date.now() + 1,
      role: 'assistant',
      content: ''
    };
    setMessages(prev => [...prev, assistantMessage]);
    setIsTyping(false);

    await typewriterEffect(conversation.response, (chunk) => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === assistantMessage.id ? { ...msg, content: chunk } : msg
        )
      );
    });
  };

  const reset = () => {
    setMessages([]);
    setSelectedPrompt(null);
    setIsTyping(false);
  };

  return (
    <section id="demo" className="py-20 px-6 bg-gradient-to-b from-zenchef-cream to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-zenchef-charcoal mb-4">
            Try It: <span className="text-zenchef-blue">Ask Your Sales Cockpit</span>
          </h2>
          <p className="text-xl text-zenchef-gray">
            Click a prompt below to see the AI in action
          </p>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-zenchef-blue/10"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-zenchef-blue to-zenchef-blue-light p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Sales Intelligence Cockpit</h3>
                <p className="text-white/80 text-sm">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={reset}
              className="text-white/80 hover:text-white text-sm underline transition-colors"
            >
              Reset
            </button>
          </div>

          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-zenchef-cream/30">
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Bot className="w-16 h-16 text-zenchef-blue/40 mx-auto mb-4" />
                  <p className="text-zenchef-gray">
                    Select a prompt below to start a conversation
                  </p>
                </div>
              </div>
            )}

            <AnimatePresence mode="popLayout">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 bg-zenchef-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.role === 'user'
                        ? 'bg-zenchef-blue-cheese text-white'
                        : 'bg-white border-2 border-zenchef-blue/10'
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {message.content}
                    </div>
                  </div>

                  {message.role === 'user' && (
                    <div className="w-8 h-8 bg-zenchef-blue-cheese rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 bg-zenchef-blue rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl p-4 border-2 border-zenchef-blue/10">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-zenchef-blue rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-zenchef-blue rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-zenchef-blue rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={messagesEndRef} />
          </div>

          {/* Prompt chips */}
          <div className="p-6 bg-white border-t-2 border-zenchef-blue/10">
            <p className="text-sm text-zenchef-gray mb-3">Try asking:</p>
            <div className="flex flex-wrap gap-3">
              {prompts.map((prompt) => (
                <motion.button
                  key={prompt.key}
                  onClick={() => handlePromptClick(prompt.key)}
                  disabled={selectedPrompt !== null}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedPrompt === prompt.key
                      ? 'bg-zenchef-blue text-white'
                      : selectedPrompt !== null
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-zenchef-blue/10 text-zenchef-blue hover:bg-zenchef-blue hover:text-white'
                  }`}
                  whileHover={selectedPrompt === null ? { scale: 1.05 } : {}}
                  whileTap={selectedPrompt === null ? { scale: 0.95 } : {}}
                >
                  {prompt.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
