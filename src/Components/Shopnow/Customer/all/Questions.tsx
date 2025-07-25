import { useEffect, useState } from "react";

interface Question {
  id: number;
  productId: string;
  message: string;
  name: string;
}

interface QuestionsProps {
  productId: string;
}

const Questions = ({ productId }: QuestionsProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editMessage, setEditMessage] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("questions");
    if (stored) {
      const parsed: Question[] = JSON.parse(stored);
      const filtered = parsed.filter((q) => q.productId === productId);
      setQuestions(filtered);
    }
  }, [productId]);

  const saveToStorage = (updatedList: Question[]) => {
    const all = JSON.parse(localStorage.getItem("questions") || "[]");
    const others = all.filter((q: Question) => q.productId !== productId);
    const merged = [...others, ...updatedList];
    localStorage.setItem("questions", JSON.stringify(merged));
  };

  const handleSubmit = () => {
    if (!message.trim()) return;

    const newQuestion: Question = {
      id: Date.now(),
      productId,
      message,
      name: name || "Anonymous",
    };

    const updated = [newQuestion, ...questions];
    setQuestions(updated);
    saveToStorage(updated);
    setMessage("");
    setName("");
  };

  const startEditing = (id: number, currentMsg: string) => {
    setEditId(id);
    setEditMessage(currentMsg);
  };

  const handleEditSave = () => {
    const updated = questions.map((q) =>
      q.id === editId ? { ...q, message: editMessage } : q
    );
    setQuestions(updated);
    saveToStorage(updated);
    setEditId(null);
    setEditMessage("");
  };

  return (
    <div className="space-y-6 mt-4">
      <h3 className="text-lg font-semibold">Customer Questions</h3>

      {/* Form */}
      <div className="border p-4 rounded space-y-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full border p-2 rounded"
        />
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask your question..."
          className="w-full border p-2 rounded resize-none"
        />
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Submit Question
        </button>
      </div>

      {/* Display Questions */}
      {questions.length > 0 ? (
        questions.map((q) => (
          <div key={q.id} className="border-b py-2 space-y-2">
            <p className="text-sm text-gray-700 font-semibold">{q.name}:</p>
            {editId === q.id ? (
              <>
                <textarea
                  value={editMessage}
                  onChange={(e) => setEditMessage(e.target.value)}
                  className="w-full border p-2 rounded resize-none"
                  rows={2}
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleEditSave}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditId(null);
                      setEditMessage("");
                    }}
                    className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-800">{q.message}</p>
                <button
                  onClick={() => startEditing(q.id, q.message)}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Edit
                </button>
              </>
            )}
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-500">No questions yet. Be the first to ask!</p>
      )}
    </div>
  );
};

export default Questions;
