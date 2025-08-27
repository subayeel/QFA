import React, { useState, useEffect } from "react";
import { TodoService } from "@/services/todoService";
import { UserTodo } from "@/types/todos.types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TimeInput } from "@/components/ui/time-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Edit } from "lucide-react";

interface UpdateTodoDrawerProps {
  todo: UserTodo;
  onTodoUpdated: () => void;
}

function UpdateTodoDrawer({ todo, onTodoUpdated }: UpdateTodoDrawerProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: todo.todo.title,
    description: todo.todo.description || "",
    time: todo.todo.time || "",
    date: new Date(todo.date).toISOString().split("T")[0],
    category: todo.todo.category || "personal",
    priority: todo.todo.priority,
  });

  // Update form data when todo prop changes
  useEffect(() => {
    setFormData({
      title: todo.todo.title,
      description: todo.todo.description || "",
      time: todo.todo.time || "",
      date: new Date(todo.date).toISOString().split("T")[0],
      category: todo.todo.category || "personal",
      priority: todo.todo.priority,
    });
  }, [todo]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter a title");
      return;
    }

    // Prevent updating suggested todos
    if (todo.todo.type === "suggested") {
      alert("Cannot update suggested todos. They are system-generated.");
      return;
    }

    try {
      await TodoService.updateTodo(todo.id, {
        title: formData.title,
        description: formData.description || undefined,
        time: formData.time || undefined,
        date: formData.date,
        category: formData.category as
          | "prayer"
          | "quran"
          | "dhikr"
          | "charity"
          | "learning"
          | "personal",
        priority: formData.priority as "high" | "medium" | "low",
      });

      setOpen(false);
      onTodoUpdated();
    } catch (error) {
      console.error("Error updating todo:", error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Failed to update todo. Please try again.");
      }
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button
          className={`flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded ${
            todo.todo.type === "suggested"
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
          disabled={todo.todo.type === "suggested"}
        >
          <Edit className="h-4 w-4" />
          {todo.todo.type === "suggested" ? "Update (System)" : "Update"}
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Update Todo</DrawerTitle>
            <DrawerDescription>Update your existing task</DrawerDescription>
          </DrawerHeader>

          <form onSubmit={handleSubmit} className="px-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Enter todo title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Enter description (optional)"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <TimeInput
                  value={formData.time}
                  onChange={(value) => handleInputChange("time", value)}
                  label="Time"
                  placeholder="e.g., 2:30 PM"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value: string) =>
                    handleInputChange("category", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="prayer">Prayer</SelectItem>
                    <SelectItem value="quran">Quran</SelectItem>
                    <SelectItem value="dhikr">Dhikr</SelectItem>
                    <SelectItem value="charity">Charity</SelectItem>
                    <SelectItem value="learning">Learning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select
                  value={formData.priority}
                  onValueChange={(value: string) =>
                    handleInputChange("priority", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>

          <DrawerFooter>
            <Button onClick={handleSubmit} className="w-full">
              Update Todo
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default UpdateTodoDrawer;
