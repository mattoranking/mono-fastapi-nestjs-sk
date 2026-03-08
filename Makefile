setup:
	@echo "🔧 Adding api.faskplusai.dev to /etc/hosts if missing..."
	@grep -q "api.faskplusai.dev" /etc/hosts || echo "127.0.0.1 api.faskplusai.dev" | sudo tee -a /etc/hosts
	@echo "🔧 Adding faskplusai.dev to /etc/hosts if missing..."
	@grep -q " faskplusai.dev" /etc/hosts || echo "127.0.0.1 faskplusai.dev" | sudo tee -a /etc/hosts
	@echo "🔧 Generating mkcert certificate for api.faskplusai.dev..."
	@mkcert -cert-file traefik/certs/api.faskplusai.dev.pem -key-file traefik/certs/api.faskplusai.dev-key.pem api.faskplusai.dev
	@echo "🔧 Generating mkcert certificate for faskplusai.dev..."
	@mkcert -cert-file traefik/certs/faskplusai.dev.pem -key-file traefik/certs/faskplusai.dev-key.pem faskplusai.dev
	@echo "✅ Setup complete"

dev:
	docker compose up --build

down:
	docker compose down
