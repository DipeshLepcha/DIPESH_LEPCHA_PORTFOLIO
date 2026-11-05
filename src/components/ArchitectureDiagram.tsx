import React, { useState } from 'react';
import { Database, ShieldCheck, CreditCard, Cpu, Lock, Zap } from 'lucide-react';

interface ArchitectureNode {
  id: string;
  title: string;
  layer: 'Client & Gateway' | 'ASP.NET Core Engine' | 'MySQL Database Tier' | 'Integration & Webhooks';
  icon: React.ElementType;
  description: string;
  technicalDetails: string[];
  codeSample: string;
}

export const ArchitectureDiagram: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('db-tier');

  const nodes: ArchitectureNode[] = [
    {
      id: 'gateway',
      title: 'REST API & Security Gateway',
      layer: 'Client & Gateway',
      icon: ShieldCheck,
      description:
        'Handles incoming client requests, TLS termination, cryptographic payload verification, and rate limiting before routing to internal services.',
      technicalDetails: [
        'JWT Bearer Authentication with granular role-based claims',
        'HMAC-SHA256 signature verification for external webhooks',
        'Model state validation using FluentValidation pipeline filters',
        'Centralized Serilog enrichment capturing correlation IDs',
      ],
      codeSample: `// ASP.NET Core Middleware Pipeline\napp.UseHttpsRedirection();\napp.UseAuthentication();\napp.UseAuthorization();\napp.UseMiddleware<CorrelationIdMiddleware>();`,
    },
    {
      id: 'core-engine',
      title: 'ASP.NET Core Business Logic',
      layer: 'ASP.NET Core Engine',
      icon: Cpu,
      description:
        'Clean Architecture service interfaces executing domain state machines, repository coordination, and ACID transaction boundaries.',
      technicalDetails: [
        'Strict Dependency Injection with Scoped service lifetimes',
        'Finite state machine governing permit approval lifecycles',
        'Asynchronous Task-based I/O avoiding thread-pool starvation',
        'Structured exception handling with RFC 7807 ProblemDetails',
      ],
      codeSample: `public async Task<PermitResult> ProcessApplicationAsync(\n    PermitRequest request, CancellationToken ct)\n{\n    using var tx = await _db.BeginTransactionAsync(ct);\n    return await _permitWorkflow.ExecuteTransitionAsync(request, tx);\n}`,
    },
    {
      id: 'db-tier',
      title: 'MySQL Stored Procedures & Engine',
      layer: 'MySQL Database Tier',
      icon: Database,
      description:
        'Normalized relational schema with InnoDB row-level locking, atomic stored procedures, and immutable audit logs to prevent double-booking.',
      technicalDetails: [
        'SELECT ... FOR UPDATE pessimistic locks to prevent race conditions',
        'Precompiled stored procedures reducing network roundtrips',
        'Optimized B-Tree indexes based on EXPLAIN execution plans',
        'Audit ledger trigger recording snapshot delta and actor timestamps',
      ],
      codeSample: `CREATE PROCEDURE sp_ReserveSlot(\n    IN p_SlotId INT, IN p_UserId VARCHAR(64), OUT p_Success TINYINT)\nBEGIN\n    START TRANSACTION;\n    SELECT AvailableQty FROM Permits WHERE Id = p_SlotId FOR UPDATE;\n    -- Atomic reservation decrement\n    COMMIT;\nEND`,
    },
    {
      id: 'integrations',
      title: 'Payment & Event Webhook Hub',
      layer: 'Integration & Webhooks',
      icon: CreditCard,
      description:
        'Resilient payment broker listening to payment gateway webhooks, verifying bank signatures, and ensuring strictly idempotent order execution.',
      technicalDetails: [
        'Idempotency key validation cached in high-speed relational index',
        'Exponential backoff background retry worker for delayed notifications',
        'Automated midnight banking reconciliation scripts',
        'Zero-trust signature verification on all incoming webhook payloads',
      ],
      codeSample: `// Webhook Idempotency Validation\nif (await _idempotencyStore.HasProcessedAsync(eventKey))\n    return Ok(new { message = "Already reconciled" });\n\nawait _orderService.ConfirmPaymentAsync(webhookPayload);`,
    },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <div className="my-10 bg-[#222421] bg-dark-grain text-[#F4F0E8] rounded-3xl p-6 sm:p-10 border border-[#FFFFFF]/15 shadow-2xl relative overflow-hidden">
      {/* Background Japanese Enso / Minimalist Wave Geometry */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 900 450" fill="none" className="w-full h-full object-cover">
          <circle cx="750" cy="220" r="180" stroke="#BD493B" strokeWidth="2" strokeDasharray="12 6" />
          <path d="M0 200 C300 100, 600 300, 900 150" stroke="#BD493B" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M0 320 C300 240, 600 400, 900 280" stroke="#F4F0E8" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#FFFFFF]/10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#BD493B] uppercase mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Full-Stack Architecture &bull; Technical Blueprint</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#F4F0E8]">
              End-to-End System Engineering
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#F4F0E8]/75 max-w-xl font-sans">
              How requests flow through ASP.NET Core, execute atomic MySQL stored procedures, and reconcile multi-tier payment webhooks.
            </p>
          </div>

          <span className="text-[11px] font-mono tracking-widest text-[#BD493B] uppercase bg-[#FFFFFF]/10 px-3 py-1.5 rounded-full border border-[#FFFFFF]/15 self-start md:self-auto">
            Interactive Architecture Inspector
          </span>
        </div>

        {/* Pipeline Nodes Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isSelected = node.id === activeNodeId;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`text-left p-4 rounded-xl border transition-all relative ${
                  isSelected
                    ? 'bg-[#343630] border-[#BD493B] shadow-lg scale-102 ring-2 ring-[#BD493B]/40'
                    : 'bg-[#FFFFFF]/5 border-[#FFFFFF]/10 hover:bg-[#FFFFFF]/10 hover:border-[#FFFFFF]/25'
                } focus:outline-none focus:ring-2 focus:ring-[#BD493B]` }
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#BD493B] mb-2">
                  <span>Step 0{index + 1}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#BD493B] animate-ping" />}
                </div>

                <div className="flex items-center space-x-2.5 mb-2">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#BD493B] text-[#FFFFFF]' : 'bg-[#FFFFFF]/10 text-[#F4F0E8]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-xs sm:text-sm text-[#F4F0E8] leading-snug">
                    {node.title}
                  </h4>
                </div>

                <span className="text-[11px] text-[#F4F0E8]/60 block line-clamp-2 font-sans">
                  {node.layer}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Node Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#FFFFFF]/5 rounded-2xl p-6 sm:p-8 border border-[#FFFFFF]/12">
          {/* Left Column: Description & Guarantees */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#BD493B] uppercase tracking-wider mb-2">
                <span>Selected Discipline</span>
                <span>&bull;</span>
                <span>{activeNode.layer}</span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#F4F0E8] mb-3">
                {activeNode.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#F4F0E8]/85 leading-relaxed mb-5 font-sans">
                {activeNode.description}
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#BD493B] block">
                  Engineering Guarantees:
                </span>
                {activeNode.technicalDetails.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start space-x-2 text-xs text-[#F4F0E8]/85 font-sans">
                    <span className="text-[#BD493B] font-bold">&bull;</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2 text-[11px] text-[#BD493B] font-mono pt-3 border-t border-[#FFFFFF]/10">
              <Lock className="w-3.5 h-3.5" />
              <span>Production-Hardened Pattern &bull; Zero Race Conditions</span>
            </div>
          </div>

          {/* Right Column: Code Architecture Sample */}
          <div className="lg:col-span-6 bg-[#161715] rounded-xl p-4 sm:p-5 border border-[#FFFFFF]/10 flex flex-col justify-between font-mono">
            <div className="flex items-center justify-between text-xs text-[#F4F0E8]/60 mb-3 pb-2 border-b border-[#FFFFFF]/10">
              <span className="text-[11px] text-[#BD493B]">C# / SQL Blueprint</span>
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
            </div>

            <pre className="text-[11px] sm:text-xs text-[#E8E0D2] overflow-x-auto p-2 leading-relaxed">
              <code>{activeNode.codeSample}</code>
            </pre>

            <span className="text-[10px] text-[#F4F0E8]/50 pt-3 border-t border-[#FFFFFF]/10 block text-right">
              ASP.NET Core 8 &bull; MySQL 8.0 Engine
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
