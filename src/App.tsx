import { useMemo, useState } from "react";
import logo from "./assets/CarruselRecurso 9.png";
import heroNueva from "./assets/ChatGPT Image 11 sept 2026, 02_37_19.png";
import burguer from "./assets/BURGUER.jfif";
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
      className="sticky top-0 z-20 flex-shrink-0 border-b border-green-100 bg-white/95 backdrop-blur"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="relative flex h-16 w-full items-center justify-between px-4 md:h-20 md:px-10">
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
  className="h-12 w-auto object-contain md:h-16"
/>
          </button>
        </div>

        {/* mobile page title, centered */}
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 truncate px-16 text-[15px] font-bold uppercase tracking-tight text-neutral-900 md:hidden">
          {mobileTitle}
        </h1>

        {/* desktop horizontal nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = view === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${
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
          className="relative rounded-full p-2 text-[#0B6B3A] active:bg-neutral-100 md:border md:border-neutral-200 md:px-4 md:py-2 md:hover:bg-neutral-50"
        >
          <span className="flex items-center gap-2">
            <ShoppingCart size={20} />
            <span className="hidden text-base font-semibold text-neutral-800 md:inline">
              Carrito
            </span>
          </span>
          {!!cartCount && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white md:right-1 md:top-1">
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
            className={`flex min-h-[48px] flex-1 flex-col items-center justify-center gap-1 rounded-xl py-1 text-[11px] active:bg-neutral-50 ${
              active ? "text-green-700" : "text-neutral-400"
            }`}
          >
            {item.icon}
<span className={`text-[11px] ${active ? "font-bold" : "font-semibold"}`}>  {item.label}
</span>
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
      <div className="mx-6 mt-4 overflow-hidden rounded-2xl md:mx-16 md:mt-8">
  <div className="grid min-h-[360px] items-center md:grid-cols-[42%_58%]">
    
    <div
  className="h-72 bg-cover bg-no-repeat md:h-full"
  style={{
    backgroundImage: `url(${heroNueva})`,
    backgroundPosition: "70% center",
  }}
/>

    <div className="flex flex-col justify-center rounded-r-2xl px-6 py-10 text-white md:px-10">
  <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#0B6B3A]">
    Bienvenidos a
  </p>

  <h1 className="mt-3 text-3xl font-bold uppercase leading-none md:text-4xl">
    <span className="text-[#0B6B3A]">EL</span>
    <span className="text-[#0B6B3A]">Gordito</span>
  </h1>

  <p className="mt-4 text-lg font-bold uppercase text-neutral-900 md:text-2xl">
    Hamburguesas, churrascos y papas fritas
  </p>

  <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-600 md:text-base">
    Sabor contundente, hecho para matar el hambre como corresponde.
  </p>

  <button
    onClick={onGoToMenu}
    className="mt-6 flex w-full items-center justify-center rounded-full bg-[#0B6B3A] px-6 py-3 text-sm font-bold uppercase text-white transition hover:bg-[#07552E]"
  >
    Hacer un pedido
</button>
</div>

</div>

</div>

<div className="mt-6 w-full px-6 md:mt-12 md:grid md:grid-cols-2 md:gap-16 md:px-16 lg:px-24">
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
  onAdd,
}: {
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
    <div className="w-full bg-white px-6 py-8 md:px-16 lg:px-20">
      {/* ENCABEZADO DEL MENÚ */}
<section className="mb-8 border-b border-green-100 pb-6">
  <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-700">
    Nuestro menú
  </p>

  <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
    <div>
      <h1 className="text-4xl font-bold leading-tight text-neutral-900 md:text-6xl">
        Elige tu favorito,
        <span className="block text-green-700">
          nosotros hacemos el resto.
        </span>
      </h1>

      <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 md:text-base">
        Hamburguesas, churrascos y papas fritas preparadas al momento.
        Encuentra tu favorito, agrégalo al carrito y realiza tu pedido.
      </p>
    </div>

    <div className="shrink-0 md:text-right">
      <p className="text-xl font-bold italic text-green-700 md:text-2xl">
        Sabor contundente.
      </p>

      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
        El Gordito Fast Food
      </p>
    </div>
  </div>
</section>
      <div className="mt-6 flex w-full max-w-xl items-center gap-3 rounded-xl bg-neutral-100 px-4 py-3">
        <Search size={18} className="text-neutral-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="w-full bg-transparent text-base text-neutral-800 outline-none placeholder:text-neutral-400"
        />
      </div>

      <div className="mt-6 flex w-full gap-12 overflow-x-auto border-b border-green-100 pb-1 text-base text-neutral-500 [scrollbar-width:none]">
        {CATEGORY_TABS.map((tab) => {
          const active = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-2 pb-3 text-lg font-medium ${
                active
                  ? "border-b-2 border-green-700 font-bold text-green-700"
                  : ""
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 && (
          <p className="col-span-full py-8 text-center text-sm text-neutral-400">
            No encontramos platos con ese nombre.
          </p>
        )}
        {filtered.map((product) => (
          <div
            key={product.id}
            className="relative flex h-[150px] overflow-hidden rounded-xl border border-neutral-200 bg-white text-neutral-900 shadow-sm"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-[42%] flex-shrink-0 object-cover object-center"
            />
            <div className="order-1 flex min-w-0 flex-1 flex-col p-3">
              <p className="text-base font-bold text-neutral-900">
                {product.name}
              </p>
              <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-neutral-500">{product.subtitle}</p>
              <p className="mt-auto pt-4 text-lg font-bold text-green-700">{formatPrice(product.price)}</p>
              <button
  onClick={() => onAdd(product)}
className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#0B6B3A] text-lg font-bold text-white transition hover:bg-[#07552F]"  aria-label={`Agregar ${product.name} al carrito`}
>
  +
</button>
            </div>

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
    <div className="w-full bg-white px-6 py-6 md:px-12 lg:px-14">
      <section className="mb-10 border-b border-green-100 pb-8">
  <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-700">
    Pídenos
  </p>

  <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
    <div>
      <h1 className="text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
        Haz tu pedido,
        <span className="block text-green-700">
          nosotros lo preparamos.
        </span>
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 md:text-base">
        ¿Tienes alguna consulta, pedido especial o quieres coordinar tu compra?
        Escríbenos y te responderemos por WhatsApp.
      </p>
    </div>

    <div className="shrink-0 md:text-right">
      <p className="text-xl font-bold italic text-green-700 md:text-2xl">
        Rico, rápido y contundente.
      </p>

      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
        El Gordito Fast Food
      </p>
    </div>
  </div>
</section>

      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-2 block text-base font-semibold text-neutral-700">
              Nombre
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Introduce tu nombre"
              className="w-full rounded-xl bg-neutral-100 px-4 py-4 text-base outline-none placeholder:text-neutral-400"
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
              className="w-full rounded-xl bg-neutral-100 px-4 py-4 text-base outline-none placeholder:text-neutral-400"
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
              className="w-full resize-none rounded-xl bg-neutral-100 px-4 py-4 text-base outline-none placeholder:text-neutral-400"
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
              <p className="text-lg font-bold text-neutral-900">Nuestra Dirección</p>
              <p className="mt-1 text-base text-neutral-500">Puente Alto, Región Metropolitana</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-neutral-100 p-2.5 text-green-700">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-lg font-bold text-neutral-900">Llámanos</p>
              <p className="mt-1 text-base text-neutral-500">+56 9 5454 6997</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-neutral-100 p-2.5 text-green-700">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-lg font-bold text-neutral-900">Envíanos un Email</p>
              <p className="mt-1 text-base text-neutral-500">elgorditofastfood16@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="w-full bg-white px-6 py-10 md:px-16 lg:px-20">
      <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-start">

        {/* TARJETA IZQUIERDA */}
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">

          <img
            src={burguer}
            alt="Hamburguesa El Gordito"
            className="h-[300px] w-full object-cover object-center md:h-[340px]"
          />

          <div className="p-6 md:p-7">
            <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
              El Gordito Fast Food
            </h2>

            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              Cocina de comida rápida preparada al momento, enfocada en
              hamburguesas, churrascos y papas fritas.
            </p>

            <div className="mt-8 space-y-7">

              <div>
                <p className="text-lg font-bold text-neutral-900">
                  Pedidos solo para llevar
                </p>
                <p className="mt-1 text-neutral-500">
                  No contamos con atención para consumo en el lugar.
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-neutral-900">
                  Delivery
                </p>
                <p className="mt-1 text-neutral-500">
                  Disponible según distancia. El valor se calcula según los
                  kilómetros.
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-neutral-900">
                  Zona de atención
                </p>
                <p className="mt-1 text-neutral-500">
                  Puente Alto y alrededores.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* INFORMACIÓN DERECHA */}
        <div className="lg:py-6">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
            Nosotros
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-neutral-900 md:text-6xl">
            Más que comida,
            <span className="block text-green-700">
              es sabor real.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
            En El Gordito creemos que una buena hamburguesa o un buen
            churrasco no solo se trata de comida, sino de disfrutar algo
            rico y contundente. Preparamos cada pedido al momento, buscando
            entregar siempre un producto fresco y con mucho sabor.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
            Trabajamos desde casa con una cocina dedicada a los pedidos.
            Puedes realizar tu compra previamente y coordinar el retiro o
            solicitar delivery según tu ubicación.
          </p>

          <div className="my-9 h-px w-full bg-green-100" />

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-bold text-neutral-900">
                Calidad
              </h3>
              <p className="mt-1 text-base text-neutral-500 md:text-lg">
                Buscamos utilizar buenos ingredientes para lograr el mejor
                sabor en cada pedido.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neutral-900">
                Frescura
              </h3>
              <p className="mt-1 text-base text-neutral-500 md:text-lg">
                Nuestros pedidos se preparan al momento para entregarlos
                frescos y recién hechos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neutral-900">
                Servicio
              </h3>
              <p className="mt-1 text-base text-neutral-500 md:text-lg">
                Queremos que cada pedido sea simple, rápido y tenga una buena
                experiencia desde que lo realizas hasta que lo recibes.
              </p>
            </div>

          </div>

          <div className="mt-12">
            <p className="text-3xl font-bold italic text-green-700 md:text-4xl">
              Gracias por el apoyo.
            </p>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
              El Gordito Fast Food
            </p>
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

function addToCart(product: Product) {
  setCart((prev) => {
    const existing = prev.find((l) => l.product.id === product.id);

    if (existing) {
      return prev.map((l) =>
        l.product.id === product.id
          ? { ...l, qty: l.qty + 1 }
          : l
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
        {view === "menu" && <MenuPage onAdd={addToCart} />}
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