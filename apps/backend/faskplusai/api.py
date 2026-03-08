from fastapi import APIRouter

from faskplusai.user.endpoints import router as user_router

router = APIRouter(prefix="/v1")

# /clients
router.include_router(user_router)
