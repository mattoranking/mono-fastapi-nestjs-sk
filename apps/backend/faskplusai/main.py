from collections.abc import AsyncIterator
from contextlib import asynccontextmanager
from typing import TypedDict

import structlog
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from faskplusai.api import router
from faskplusai.config import settings
from faskplusai.health.endpoints import router as health_router


def configure_cors(app: FastAPI) -> None:
    # CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],  # NestJS frontend
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifespan event for the FastAPI application."""
    print("Lifespan - Starting up the application...")
    yield
    print("Lifespan - Shutting down the application...")
    pass


def create_app() -> FastAPI:
    app = FastAPI(
        title="faskplusai API",
        description="Welcome to the faskplusai API documentation."
                    "Here you will be able to discover all of the "
                    "ways you can interact with the faskplusai API.",
        lifespan=lifespan,
    )

    configure_cors(app)

    # /health
    app.include_router(health_router)

    app.include_router(router)

    return app


app = create_app()
