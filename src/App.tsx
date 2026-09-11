import { useMemo, useState } from "react";
import logo from "./assets/CarruselRecurso 9.png";
import {
  Home as HomeIcon,
  BookOpen,
  IdCard,
  Info,
  ShoppingCart,
  Plus,
  Minus,
  Search,
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowLeft,
  Bike,
  Trash2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

const RESTAURANT_NAME = "El Gordito";
const RESTAURANT_FULL_NAME = "El Gordito Fast Food";
const WHATSAPP_NUMBER = "56954546997"; // digits only, country code included

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Category = "Churrascos" | "Hamburguesas" | "Papas Fritas";

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  category: Category;
  image: string;
}

interface CartLine {
  product: Product;
  qty: number;
}

type View = "home" | "menu" | "cart" | "contact" | "about";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  category: Category;
  image: string;
}

interface CartLine {
  product: Product;
  qty: number;
}


/* ------------------------------------------------------------------ */
/*  Data - EL GORDITO                                                  */
/* ------------------------------------------------------------------ */

const PRODUCTS: Product[] = [
  /* ================================================================ */
  /*  HAMBURGUESAS                                                     */
  /* ================================================================ */

  {
    id: "cuarto-gordito",
    name: "Cuarto Gordito",
    subtitle:
      "Carne, queso cheddar, cebolla, pepinillos, ketchup y mostaza",
    price: 0,
    category: "Hamburguesas",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
  },
  {
    id: "la-regalona",
    name: "La Regalona",
    subtitle:
      "Carne, queso cheddar, tocino, cebolla y salsa BBQ",
    price: 0,
    category: "Hamburguesas",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=400&fit=crop",
  },
  {
    id: "don-gordo",
    name: "Don Gordo",
    subtitle:
      "Doble carne, lechuga, queso cheddar, tocino, cebolla y salsa BBQ",
    price: 0,
    category: "Hamburguesas",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop",
  },
  {
    id: "hamburguesa-italiana",
    name: "Hamburguesa Italiana",
    subtitle:
      "Carne, palta, tomate, lechuga y mayonesa",
    price: 0,
    category: "Hamburguesas",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
  },

  /* ================================================================ */
  /*  CHURRASCOS                                                       */
  /* ================================================================ */

  {
    id: "churrasco-italiano",
    name: "Churrasco Italiano",
    subtitle:
      "Carne, tomate, palta y mayonesa",
    price: 0,
    category: "Churrascos",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=400&fit=crop",
  },
  {
    id: "churrasco-barros-luco",
    name: "Churrasco Barros Luco",
    subtitle:
      "Carne y queso fundido",
    price: 0,
    category: "Churrascos",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
  },
  {
    id: "churrasco-dinamico",
    name: "Churrasco Dinámico",
    subtitle:
      "Carne, tomate, porotos verdes y ají verde",
    price: 0,
    category: "Churrascos",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=400&fit=crop",
  },
  {
    id: "churrasco-a-lo-pobre",
    name: "Churrasco A lo Pobre",
    subtitle:
      "Carne, cebolla frita y huevo",
    price: 0,
    category: "Churrascos",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
  },
  {
    id: "churrasco-palta-mayo",
    name: "Churrasco Palta Mayo",
    subtitle:
      "Carne, palta y mayonesa",
    price: 0,
    category: "Churrascos",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=400&fit=crop",
  },

  /* ================================================================ */
  /*  PAPAS FRITAS                                                     */
  /* ================================================================ */

  {
    id: "papas-clasicas",
    name: "Clásicas",
    subtitle:
      "Papas fritas",
    price: 0,
    category: "Papas Fritas",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=400&fit=crop",
  },
  {
    id: "papas-cheddar",
    name: "Cheddar",
    subtitle:
      "Papas fritas con queso cheddar",
    price: 0,
    category: "Papas Fritas",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=400&fit=crop",
  },
  {
    id: "papas-bacon",
    name: "Bacon",
    subtitle:
      "Papas fritas, queso cheddar y bacon crocante",
    price: 0,
    category: "Papas Fritas",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=400&fit=crop",
  },
  {
    id: "papas-supremas",
    name: "Supremas",
    subtitle:
      "Papas fritas, queso cheddar, cebollín y tomate",
    price: 0,
    category: "Papas Fritas",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=400&fit=crop",
  },
  {
    id: "salchipapas",
    name: "Salchipapas",
    subtitle:
      "Papas fritas con salchichas",
    price: 0,
    category: "Papas Fritas",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=400&fit=crop",
  },
];

/* ------------------------------------------------------------------ */
/*  Categorías del menú                                                */
/* ------------------------------------------------------------------ */

const CATEGORY_TABS: Array<Category | "Todos"> = [
  "Churrascos",
  "Hamburguesas",
  "Papas Fritas",
  "Todos",
];

const NAV_ITEMS: Array<{ id: View; label: string; icon: React.ReactNode }> = [
  { id: "home", label: "Inicio", icon: <HomeIcon size={20} /> },
  { id: "menu", label: "Menú", icon: <BookOpen size={20} /> },
  { id: "contact", label: "Contacto", icon: <IdCard size={20} /> },
  { id: "about", label: "Nosotros", icon: <Info size={20} /> },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatPrice(value: number): string {
  return `$${value.toLocaleString("es-CL")}`;
}

/* ------------------------------------------------------------------ */
/*  Header: back-arrow + title on phones, full navbar on desktop       */
/* ------------------------------------------------------------------ */

function Header({
  view,
  mobileTitle,
  onNavigate,
  onBackMobile,
  cartCount,
  onCartClick,
}: {
  view: View;
  mobileTitle: string;
  onNavigate: (v: View) => void;
  onBackMobile: () => void;
  cartCount: number;
  onCartClick: () => void;
}) {
  return (
    <header
      className="sticky top-0 z-20 flex-shrink-0 border-b border-neutral-100 bg-white/95 backdrop-blur"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-8">
        {/* left: back arrow (mobile only, when not home) + logo */}
        <div className="flex items-center gap-2">
          {view !== "home" && (
            <button
              onClick={onBackMobile}
              aria-label="Volver"
              className="-ml-1 rounded-full p-2 text-neutral-700 active:bg-neutral-100 md:hidden"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2"
            aria-label="Ir al inicio"
          >
            <img
  src={logo}
  alt="El Gordito Fast Food"
  className="h-14 w-auto object-contain md:h-14"
/>
          </button>
        </div>

        {/* mobile page title, centered */}
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 truncate px-16 text-[15px] font-bold uppercase tracking-tight text-neutral-900 md:hidden">
          {mobileTitle}
        </h1>

        {/* desktop horizontal nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = view === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-semibold transition-colors ${
                  active ? "text-green-700" : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* cart, always visible */}
        <button
          onClick={onCartClick}
          aria-label="Carrito"
          className="relative rounded-full p-2 text-green-700 active:bg-neutral-100 md:border md:border-neutral-200 md:px-4 md:py-2 md:hover:bg-neutral-50"
        >
          <span className="flex items-center gap-2">
            <ShoppingCart size={20} />
            <span className="hidden text-sm font-semibold text-neutral-800 md:inline">
              Carrito
            </span>
          </span>
          {!!cartCount && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white md:right-1 md:top-1">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

function BottomNav({ view, onNavigate }: { view: View; onNavigate: (v: View) => void }) {
  return (
    <nav
      className="sticky bottom-0 z-20 flex flex-shrink-0 border-t border-neutral-100 bg-white px-2 pt-2 md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      {NAV_ITEMS.map((item) => {
        const active = view === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex min-h-[44px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1 text-[11px] active:bg-neutral-50 ${
              active ? "text-green-700" : "text-neutral-400"
            }`}
          >
            {item.icon}
            <span className={active ? "font-semibold" : ""}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Pages                                                              */
/* ------------------------------------------------------------------ */

function HomePage({ onGoToMenu }: { onGoToMenu: () => void }) {
  return (
    <div className="pb-6 md:pb-16">
      <div className="mx-4 mt-4 overflow-hidden rounded-2xl md:mx-auto md:mt-8 md:max-w-5xl">
        <div
          className="relative h-44 bg-cover bg-center md:h-80"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&h=700&fit=crop)",
          }}
        >
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-8">
            <p className="text-lg font-bold text-white md:text-3xl">Bienvenido</p>
            <button
              onClick={onGoToMenu}
              className="mt-1 text-sm text-white/90 underline underline-offset-2 md:mt-4 md:inline-block md:rounded-full md:bg-white md:px-5 md:py-2.5 md:text-sm md:font-semibold md:text-green-800 md:no-underline md:hover:bg-neutral-100"
            >
              Descubre nuestro menú
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 px-4 md:mx-auto md:mt-12 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12 md:px-8">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
            Bienvenidos a {RESTAURANT_FULL_NAME}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-600 md:text-base">
            En {RESTAURANT_NAME} te invitamos a disfrutar de comida rica,
            contundente y preparada para matar el hambre como corresponde.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-neutral-600 md:text-base">
            Tenemos hamburguesas, churrascos y papas fritas, preparados con buenos
            ingredientes.
          </p>
          <button
            onClick={onGoToMenu}
            className="mt-5 hidden rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800 md:inline-block"
          >
            Ver el menú completo
          </button>
        </div>

        <div className="mt-6 md:mt-0">
          <h2 className="text-lg font-bold text-neutral-900 md:text-xl">Encuéntranos</h2>
          <div className="mt-3 h-40 overflow-hidden rounded-xl border border-neutral-200 md:h-64">
            <iframe
              title="Ubicación del restaurante"
              className="h-full w-full"
              loading="lazy"
              src="https://www.google.com/maps?q=Plaza+de+Puente+Alto,+Chile&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuPage({
  cartByProduct,
  onAdd,
}: {
  cartByProduct: Record<string, number>;
  onAdd: (product: Product) => void;
}) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<(typeof CATEGORY_TABS)[number]>("Churrascos");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesTab = activeTab === "Todos" || p.category === activeTab;
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      return matchesTab && matchesQuery;
    });
  }, [activeTab, query]);

  return (
    <div className="px-4 pb-4 md:mx-auto md:max-w-5xl md:px-8 md:pb-12">
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-neutral-100 px-3 py-2.5 md:mt-6 md:max-w-sm">
        <Search size={18} className="text-neutral-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="w-full bg-transparent text-base text-neutral-800 outline-none placeholder:text-neutral-400"
        />
      </div>

      <div className="mt-4 flex gap-5 overflow-x-auto border-b border-neutral-100 text-sm text-neutral-400 [scrollbar-width:none]">
        {CATEGORY_TABS.map((tab) => {
          const active = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap pb-2 ${
                active
                  ? "border-b-2 border-green-700 font-semibold text-neutral-900"
                  : ""
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {filtered.length === 0 && (
          <p className="col-span-full py-8 text-center text-sm text-neutral-400">
            No encontramos platos con ese nombre.
          </p>
        )}
        {filtered.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-neutral-100 sm:flex-col sm:items-stretch sm:gap-0 sm:overflow-hidden sm:p-0"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-16 w-16 flex-shrink-0 rounded-xl object-cover sm:h-40 sm:w-full sm:rounded-none"
            />
            <div className="min-w-0 flex-1 sm:p-4">
              <p className="truncate font-semibold text-neutral-900">
                {product.name}
              </p>
              <p className="text-sm text-neutral-400">{product.subtitle}</p>
              <p className="font-bold text-green-700">{formatPrice(product.price)}</p>
              <button
                onClick={() => onAdd(product)}
                className="mt-3 hidden w-full items-center justify-center gap-1.5 rounded-full bg-green-700 px-3 py-2.5 text-sm font-semibold text-white active:bg-green-800 sm:flex"
              >
                <ShoppingCart size={16} />
                {cartByProduct[product.id]
                  ? `Agregado (${cartByProduct[product.id]})`
                  : "Agregar al carrito"}
              </button>
            </div>
            <button
              onClick={() => onAdd(product)}
              className="flex flex-shrink-0 items-center gap-1.5 rounded-full bg-green-700 px-3 py-2 text-xs font-semibold text-white active:bg-green-800 sm:hidden"
            >
              <ShoppingCart size={14} />
              {cartByProduct[product.id] ? `Agregado (${cartByProduct[product.id]})` : "Agregar"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartPage({
  lines,
  onIncrement,
  onDecrement,
  onRemove,
  address,
  setAddress,
  notes,
  setNotes,
}: {
  lines: CartLine[];
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
  address: string;
  setAddress: (v: string) => void;
  notes: string;
  setNotes: (v: string) => void;
}) {
  const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);
  const total = lines.length > 0 ? subtotal: 0;

  const whatsappHref = useMemo(() => {
    if (lines.length === 0) return undefined;
    const itemLines = lines
      .map(
        (l) =>
          `${l.product.name}\n  • Cantidad: ${l.qty}\n  • Precio: ${formatPrice(
            l.product.price * l.qty
          )}`
      )
      .join("\n\n");
    const message = [
  "¡Hola! Quisiera pedir:",
  "",
  itemLines,
  "",
  `Dirección: ${address || "No indicada"}`,
  `Instrucciones: ${notes || "Sin instrucciones"}`,
  "",
  `Total productos: ${formatPrice(total)}`,
  "Delivery: Se calcula según distancia (km).",
].join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [lines, address, notes, total]);

  return (
    <div className="px-4 pb-4 md:mx-auto md:max-w-5xl md:px-8 md:pb-12">
      <h2 className="mt-3 text-lg font-bold text-neutral-900 md:mt-6 md:text-2xl">
        Tu Pedido
      </h2>

      {lines.length === 0 ? (
        <p className="py-10 text-center text-sm text-neutral-400">
          Tu carrito está vacío. Agrega algo delicioso desde el menú.
        </p>
      ) : (
        <div className="mt-4 flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-10">
          <div className="flex flex-col gap-3 lg:col-span-2">
            {lines.map((line) => (
              <div
                key={line.product.id}
                className="flex items-center gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-neutral-100"
              >
                <img
                  src={line.product.image}
                  alt={line.product.name}
                  className="h-14 w-14 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-neutral-900">
                    {line.product.name}
                  </p>
                  <p className="font-bold text-green-700">
                    {formatPrice(line.product.price * line.qty)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      line.qty === 1 ? onRemove(line.product.id) : onDecrement(line.product.id)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 active:bg-neutral-200"
                    aria-label="Quitar uno"
                  >
                    {line.qty === 1 ? <Trash2 size={16} /> : <Minus size={16} />}
                  </button>
                  <span className="w-4 text-center text-sm font-semibold">{line.qty}</span>
                  <button
                    onClick={() => onIncrement(line.product.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 active:bg-neutral-200"
                    aria-label="Agregar uno"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-neutral-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-700">
                <Bike size={26} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-neutral-900">Delivery</p>
                <p className="font-semibold text-green-700">Según distancia (km)</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <div className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4">
              <span className="font-semibold text-neutral-900">Total</span>
              <span className="text-lg font-bold text-green-700">{formatPrice(total)}</span>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-neutral-700">
                Dirección de envío
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Tu dirección..."
                className="w-full rounded-xl bg-neutral-100 px-3 py-3 text-base outline-none placeholder:text-neutral-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-neutral-700">
                Instrucciones o comentarios
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Sin cebolla, por favor"
                rows={3}
                className="w-full resize-none rounded-xl bg-neutral-100 px-3 py-3 text-base outline-none placeholder:text-neutral-400"
              />
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-green-600 py-3.5 font-semibold text-white hover:bg-green-700 active:bg-green-700"
            >
              <Send size={18} />
              Ordenar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  

function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const message = `Hola, soy ${form.name}.

Correo: ${form.email}

Mensaje:
${form.message}`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
}
  return (
    <div className="px-4 pb-6 md:mx-auto md:max-w-5xl md:px-8 md:pb-16">
      <h2 className="mt-3 text-lg font-bold text-neutral-900 md:mt-6 md:text-2xl">
        Contáctanos
      </h2>

      <div className="mt-4 md:grid md:grid-cols-2 md:gap-14">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-sm font-semibold text-neutral-700">
              Nombre
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="introduce tu nombre"
              className="w-full rounded-xl bg-neutral-100 px-3 py-3 text-base outline-none placeholder:text-neutral-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-neutral-700">
              Correo Electrónico
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Introduce tu correo"
              className="w-full rounded-xl bg-neutral-100 px-3 py-3 text-base outline-none placeholder:text-neutral-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-neutral-700">
              Mensaje
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Escribe tu mensaje"
              className="w-full resize-none rounded-xl bg-neutral-100 px-3 py-3 text-base outline-none placeholder:text-neutral-400"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-green-700 py-3.5 font-semibold text-white hover:bg-green-800 active:bg-green-800"
          >
            <Send size={18} />
            Enviar
          </button>
          
        </form>

        <div className="mt-6 flex flex-col gap-4 md:mt-0 md:justify-center">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-neutral-100 p-2.5 text-green-700">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Nuestra Dirección</p>
              <p className="text-sm text-neutral-500">Puente Alto, Región Metropolitana</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-neutral-100 p-2.5 text-green-700">
              <Phone size={20} />
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Llámanos</p>
              <p className="text-sm text-neutral-500">+56 9 5454 6997</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-neutral-100 p-2.5 text-green-700">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Envíanos un Email</p>
              <p className="text-sm text-neutral-500">elgorditofastfood16@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  const philosophy = [
    {
      title: "Calidad",
      text: "Nos esforzamos por usar solo los ingredientes de la más alta calidad.",
    },
    {
      title: "Frescura",
      text: "Nuestros productos son frescos y de origen local.",
    },
    {
      title: "Servicio",
      text: "Ofrecemos un servicio amable y atento a cada cliente.",
    },
  ];

  return (
    <div className="pb-6 md:pb-16">
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=700&fit=crop"
        alt="Fachada del restaurante"
        className="h-40 w-full object-cover md:h-72"
      />
      <div className="px-4 md:mx-auto md:max-w-5xl md:px-8">
        <div className="md:grid md:grid-cols-3 md:gap-14">
          <div className="md:col-span-2">
            <h2 className="mt-4 text-lg font-bold text-neutral-900 md:mt-8 md:text-2xl">
              Nuestra Historia
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-neutral-600 md:text-base">
              Nuestro restaurante, establecido en 1995, se ha convertido en un
              referente local en comida rápida de calidad. Nos especializamos en
              ofrecer una deliciosa variedad de pizzas, hamburguesas y otros
              platillos rápidos, elaborados con ingredientes frescos y un toque
              único. Nuestro equipo comprometido y amigable trabaja para brindar
              un servicio rápido y eficiente, asegurando una experiencia agradable
              para cada cliente.
            </p>
          </div>

          <div>
            <h2 className="mt-6 text-lg font-bold text-neutral-900 md:mt-8 md:text-2xl">
              Nuestra Filosofía
            </h2>
            <div className="mt-3 flex flex-col gap-3">
              {philosophy.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-neutral-100"
                >
                  <div className="h-11 w-11 flex-shrink-0 rounded-full bg-green-100" />
                  <div>
                    <p className="font-semibold text-neutral-900">{item.title}</p>
                    <p className="text-sm text-neutral-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  const [view, setView] = useState<View>("home");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const cartCount = cart.reduce((sum, l) => sum + l.qty, 0);
  const cartByProduct = useMemo(
    () => Object.fromEntries(cart.map((l) => [l.product.id, l.qty])),
    [cart]
  );

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((l) => l.product.id === product.id);
      if (existing) {
        return prev.map((l) =>
          l.product.id === product.id ? { ...l, qty: l.qty + 1 } : l
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  }

  function incrementLine(id: string) {
    setCart((prev) => prev.map((l) => (l.product.id === id ? { ...l, qty: l.qty + 1 } : l)));
  }

  function decrementLine(id: string) {
    setCart((prev) =>
      prev.map((l) => (l.product.id === id ? { ...l, qty: Math.max(1, l.qty - 1) } : l))
    );
  }

  function removeLine(id: string) {
    setCart((prev) => prev.filter((l) => l.product.id !== id));
  }

  const titles: Record<View, string> = {
    home: RESTAURANT_NAME.toUpperCase(),
    menu: "Menú",
    cart: "Carrito de Compras",
    contact: "Contacto",
    about: "Sobre Nosotros",
  };

  return (
    <div className="flex h-[100dvh] flex-col bg-neutral-50 text-neutral-900">
      <Header
        view={view}
        mobileTitle={titles[view]}
        onNavigate={setView}
        onBackMobile={() => setView(view === "cart" ? "menu" : "home")}
        cartCount={cartCount}
        onCartClick={() => setView("cart")}
      />

      <main className="min-h-0 flex-1 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
        {view === "home" && <HomePage onGoToMenu={() => setView("menu")} />}
        {view === "menu" && <MenuPage cartByProduct={cartByProduct} onAdd={addToCart} />}
        {view === "cart" && (
          <CartPage
            lines={cart}
            onIncrement={incrementLine}
            onDecrement={decrementLine}
            onRemove={removeLine}
            address={address}
            setAddress={setAddress}
            notes={notes}
            setNotes={setNotes}
          />
        )}
        {view === "contact" && <ContactPage />}
        {view === "about" && <AboutPage />}
      </main>

      <BottomNav view={view} onNavigate={setView} />
    </div>
  );
}