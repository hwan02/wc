'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GuestBook {
  id: number
  name: string
  message: string
  createdAt: string
}

export default function Guestbook() {
  const [messages, setMessages] = useState<GuestBook[]>([])
  const [newMessage, setNewMessage] = useState({ name: '', message: '' })
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 빈 입력 체크
    if (!newMessage.name.trim() || !newMessage.message.trim()) return

    const message: GuestBook = {
      id: Date.now(),
      name: newMessage.name,
      message: newMessage.message,
      createdAt: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
    
    setMessages(prevMessages => [message, ...prevMessages])
    setNewMessage({ name: '', message: '' })
    
    // 토스트 메시지 표시
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNewMessage(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 to-rose-50/50" />
      
      <div className="relative bg-white/70 backdrop-blur-sm rounded-[2.5rem] shadow-xl p-8 
        before:absolute before:inset-0 before:border-2 before:border-pink-100/30 before:rounded-[2.5rem] before:-m-1
        after:absolute after:inset-0 after:border after:border-pink-50/50 after:rounded-[2.5rem]">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />
        
        <h2 className="text-center mb-12 relative">
          <span className="block text-3xl font-serif text-gray-800 mb-3 
            bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            방명록
          </span>
          <span className="block text-sm text-gray-500 font-light">
            축하의 마음을 남겨주세요 💝
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 mb-12">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={newMessage.name}
              onChange={handleInputChange}
              className="px-6 py-4 rounded-full bg-white/80 border-2 border-pink-100/50 
                focus:border-pink-300/70 focus:ring-4 focus:ring-pink-100/30 outline-none 
                transition-all duration-300 shadow-sm placeholder:text-gray-400"
              required
            />
            <textarea
              name="message"
              placeholder="축하 메시지를 남겨주세요"
              value={newMessage.message}
              onChange={handleInputChange}
              rows={4}
              className="px-6 py-5 rounded-3xl bg-white/80 border-2 border-pink-100/50 
                focus:border-pink-300/70 focus:ring-4 focus:ring-pink-100/30 outline-none 
                transition-all duration-300 shadow-sm resize-none placeholder:text-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 
              text-white font-medium hover:from-rose-500 hover:to-pink-500 
              transition-all duration-300 shadow-lg hover:shadow-xl 
              transform hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            메시지 남기기
          </button>
        </form>

        <div className="space-y-5">
          {messages.map((message) => (
            <div
              key={message.id}
              className="bg-white/90 rounded-2xl p-6 border-2 border-pink-50 
                hover:border-pink-200/70 transition-all duration-300 shadow-md 
                hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-300 to-pink-300 
                  flex items-center justify-center text-white font-medium shadow-inner
                  group-hover:from-rose-400 group-hover:to-pink-400 transition-colors duration-300"
                >
                  {message.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{message.name}</div>
                  <div className="text-xs text-gray-500">{message.createdAt}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-14 
                font-light tracking-wide">
                {message.message}
              </p>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
            >
              <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl 
                border-2 border-pink-100/50 flex items-center gap-3"
              >
                <span className="text-2xl">💝</span>
                <span className="text-gray-700 font-medium">
                  소중한 마음 감사합니다
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}