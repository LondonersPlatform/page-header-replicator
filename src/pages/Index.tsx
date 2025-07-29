import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to KARIBU</h1>
          <p className="text-xl text-muted-foreground">Unveiling the Wonders of Africa</p>
        </div>
      </main>
    </div>
  );
};

export default Index;
