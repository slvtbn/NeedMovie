import Authenticated from "@/Layouts/Authenticated/Index"
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import '../../../../css/input.css'
import '../../../../css/sidebar.css'
import '../../../../css/button.css'
import { useForm, Head } from "@inertiajs/react"
import { Inertia } from "@inertiajs/inertia";

export default function Create({auth, movie}) {
    const {data, setData, processing, errors} = useForm({
        ...movie
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file" 
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

         if(data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
         }

        Inertia.post(route('admin.dashboard.movie.update', movie.id), {
            _method: "PUT",
            ...data
        })
    }

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Update Movie" />
            <h1 className="text-xl">Update Movie : {movie.name } </h1>
            <hr className="mt-2 mb-4" />

            <form onSubmit={submit}>
                 <InputLabel htmlFor="name" value="Name" />
                 <TextInput 
                    type="text"
                    name="name"
                    defaultValue={movie.name}
                    variant="primary-outline"
                    onChange={handleOnChange}
                    placeholder="Enter the name of the movie"
                    isError={errors.name}
                 />
                 <InputError message={errors.name} />

                 <InputLabel htmlFor="category" value="Category" className="mt-4"/>
                 <TextInput 
                    type="text"
                    name="category"
                    defaultValue={movie.category}
                    variant="primary-outline"
                    onChange={handleOnChange}
                    placeholder="Enter the category of the movie"
                    isError={errors.category}
                 />
                 <InputError message={errors.category} />

                 <InputLabel htmlFor="video_url" value="Video URL" className="mt-4"/>
                 <TextInput 
                    type="text"
                    name="video_url"
                    defaultValue={movie.video_url}
                    variant="primary-outline"
                    onChange={handleOnChange}
                    placeholder="Enter the video url of the movie"
                    isError={errors.video_url}
                 />
                 <InputError message={errors.video_url} />

                 <InputLabel htmlFor="thumbnail" value="Thumbnail" className="mt-4"/>
                 <img src={`/storage/${movie.thumbnail}`} className="w-48" />
                 <TextInput 
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    onChange={handleOnChange}
                    placeholder="Insert thumbnail of the movie"
                    isError={errors.thumbnail}
                 />
                 <InputError message={errors.thumbnail} />

                 <InputLabel htmlFor="rating" value="Rating" className="mt-4" />
                 <TextInput 
                    type="number"
                    name="rating"
                    defaultValue={movie.rating}
                    variant="primary-outline"
                    onChange={handleOnChange}
                    placeholder="Enter the rating of the movie"
                    isError={errors.rating}
                 />
                 <InputError message={errors.rating} />

                 <div className="flex flex-row mt-4 items-center">
                    <InputLabel htmlFor="is_featured" value="Is Featured" className="mr-3 mt-2" />
                    <Checkbox 
                        name="is_featured"
                        onChange={(e) => setData("is_featured", e.target.checked)}  
                        checked={movie.is_featured}
                    />
                 </div>

                 <Button 
                    type="submit"
                    className="mt-4"
                    processing={processing}
                 >Save</Button>

            </form>
        </Authenticated>
    )
}