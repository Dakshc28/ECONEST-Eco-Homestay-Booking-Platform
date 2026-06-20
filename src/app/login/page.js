import { Input, Button } from "../../components/ui";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-600 mb-6">
          Login to access your EcoNest account.
        </p>

        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Enter Email"
          />

          <Input
            type="password"
            placeholder="Enter Password"
          />

          <Button text="Login" />
        </div>
      </div>
    </div>
  );
}