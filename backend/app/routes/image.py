"""Image Generation Endpoints"""
from fastapi import APIRouter, File, UploadFile, Form
from pydantic import BaseModel

router = APIRouter()

class ImageGenerateRequest(BaseModel):
    prompt: str
    num_inference_steps: int = 50
    guidance_scale: float = 7.5
    width: int = 512
    height: int = 512
    num_images: int = 1

@router.post("/generate")
async def generate_image(request: ImageGenerateRequest):
    """
    Generate images from a text prompt.
    """
    return {
        "status": "processing",
        "prompt": request.prompt,
        "num_images": request.num_images,
    }

@router.post("/edit")
async def edit_image(
    file: UploadFile = File(...),
    prompt: str = Form(...),
):
    """
    Edit an image with AI.
    """
    return {
        "status": "processing",
        "filename": file.filename,
        "prompt": prompt,
    }
