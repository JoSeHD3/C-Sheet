import { TCharacterFormInput } from '@/libs/interfaces/character';
import { saveCharacter } from '@/libs/methods/character';
import { useForm } from 'react-hook-form';

export const CreateCharacter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCharacterFormInput>();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Character</h1>
      <form onSubmit={handleSubmit(saveCharacter)} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Class</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            {...register('className', { required: 'Class is required' })}
          />
          {errors.className && (
            <p className="text-red-500">{errors.className.message}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700">Level</label>
          <input
            type="number"
            className="w-full border border-gray-300 p-2 rounded"
            {...register('level', { required: 'Level is required', min: 1 })}
          />
          {errors.level && (
            <p className="text-red-500">{errors.level.message}</p>
          )}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Character
        </button>
      </form>
    </div>
  );
};
