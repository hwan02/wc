'use client'
import { useState } from 'react'

interface AttendanceModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (attendance: boolean, count: number) => void
}

export default function AttendanceModal({ isOpen, onClose, onSubmit }: AttendanceModalProps) {
  const [attendance, setAttendance] = useState(false)
  const [count, setCount] = useState(1)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-80">
        <h2 className="text-xl font-bold mb-4">참석여부</h2>
        <div className="mb-4">
          <label className="block mb-2">참석여부</label>
          <select
            value={attendance ? 'yes' : 'no'}
            onChange={(e) => setAttendance(e.target.value === 'yes')}
            className="w-full p-2 border rounded"
          >
            <option value="yes">참석</option>
            <option value="no">불참</option>
          </select>
        </div>
        {attendance && (
          <div className="mb-4">
            <label className="block mb-2">참석인원</label>
            <input
              type="number"
              min="1"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
        )}
        <div className="flex space-x-2">
          <button
            onClick={() => onSubmit(attendance, count)}
            className="flex-1 bg-blue-500 text-white p-2 rounded"
          >
            확인
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 text-gray-700 p-2 rounded"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  )
}