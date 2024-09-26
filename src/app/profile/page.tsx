export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-4">
          <img
            className="h-24 w-24 rounded-full"
            src="/placeholder.svg?height=96&width=96"
            alt="User Avatar"
          />
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Main St, Anytown, USA 12345
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Change Password
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Preferences</h3>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Receive email notifications</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
