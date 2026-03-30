from diffusers import AutoPipelineForText2Image
import torch

# 加载 SDXL 管道
pipe = AutoPipelineForText2Image.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16,
    variant="fp16"
)
pipe.to("cuda")

# 启用内存优化
pipe.enable_model_cpu_offload()

# 核心风格：扁平化插画（Flat illustration），长发戴眼镜女生，厚重轮廓
prompt = "Flat 2D illustration, a girl with long black hair and glasses, thick black outlines, neo-brutalism art style, vibrant pink and blue background, simple minimalist composition, high contrast, bold lines, digital creator aesthetic, modern minimalist"
negative_prompt = "photorealistic, 3d, render, blurry, bad anatomy, deformed, text, watermark, low quality, messy background"

# 生成图像
image = pipe(
    prompt=prompt,
    negative_prompt=negative_prompt,
    height=1024,
    width=1024,
    num_inference_steps=30,
    guidance_scale=8.0
).images[0]

# 保存头像
image.save("avatar.png")
